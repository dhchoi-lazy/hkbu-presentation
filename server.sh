#!/bin/bash

# Configuration
APP_NAME="hkbu-presentation"
PID_FILE="./server.pid"
LOG_FILE="./server.log"
PORT=3022

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check if server is running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
            rm -f "$PID_FILE"
            return 1
        fi
    fi
    return 1
}

# Start server function
start_server() {
    if is_running; then
        echo -e "${YELLOW}Server is already running (PID: $(cat $PID_FILE))${NC}"
        return 1
    fi

    echo -e "${GREEN}Starting $APP_NAME server...${NC}"
    
    # Build the project first
    echo "Building project..."
    yarn build
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}Build failed!${NC}"
        return 1
    fi

    # Start the server in background
    nohup env PORT=$PORT yarn start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment and check if server started successfully
    sleep 2
    if is_running; then
        echo -e "${GREEN}Server started successfully (PID: $pid)${NC}"
        echo -e "${GREEN}Server running on http://localhost:$PORT${NC}"
        echo -e "${GREEN}Logs: $LOG_FILE${NC}"
    else
        echo -e "${RED}Failed to start server${NC}"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Stop server function
stop_server() {
    if ! is_running; then
        echo -e "${YELLOW}Server is not running${NC}"
        return 1
    fi

    local pid=$(cat "$PID_FILE")
    echo -e "${GREEN}Stopping server (PID: $pid)...${NC}"
    
    kill "$pid"
    
    # Wait for graceful shutdown
    local count=0
    while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 10 ]; do
        sleep 1
        count=$((count + 1))
    done
    
    # Force kill if still running
    if ps -p "$pid" > /dev/null 2>&1; then
        echo -e "${YELLOW}Force killing server...${NC}"
        kill -9 "$pid"
    fi
    
    rm -f "$PID_FILE"
    echo -e "${GREEN}Server stopped${NC}"
}

# Restart server function
restart_server() {
    echo -e "${GREEN}Restarting $APP_NAME server...${NC}"
    stop_server
    sleep 1
    start_server
}

# Show server status
show_status() {
    if is_running; then
        local pid=$(cat "$PID_FILE")
        echo -e "${GREEN}Server is running (PID: $pid)${NC}"
        echo -e "${GREEN}Port: $PORT${NC}"
        echo -e "${GREEN}Log file: $LOG_FILE${NC}"
    else
        echo -e "${RED}Server is not running${NC}"
    fi
}

# Tail logs
tail_logs() {
    if [ ! -f "$LOG_FILE" ]; then
        echo -e "${RED}Log file not found: $LOG_FILE${NC}"
        return 1
    fi
    
    echo -e "${GREEN}Tailing logs (Ctrl+C to exit)...${NC}"
    tail -f "$LOG_FILE"
}

# Main script logic
case "$1" in
    start)
        start_server
        ;;
    stop)
        stop_server
        ;;
    restart)
        restart_server
        ;;
    status)
        show_status
        ;;
    tail)
        tail_logs
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|tail}"
        echo ""
        echo "Commands:"
        echo "  start   - Start the server"
        echo "  stop    - Stop the server"
        echo "  restart - Restart the server"
        echo "  status  - Show server status"
        echo "  tail    - Show live server logs"
        exit 1
        ;;
esac

exit 0