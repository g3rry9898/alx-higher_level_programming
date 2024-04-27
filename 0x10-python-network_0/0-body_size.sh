#!/bin/bash

# Check if a URL argument is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <URL>"
    exit 1
fi

# Send a request to the provided URL and store the response in a variable
response=$(curl -sL "$1")

# Get the size of the response body (in bytes)
size=$(echo -n "$response" | wc -c)

echo "Size of the response body: $size bytes"

