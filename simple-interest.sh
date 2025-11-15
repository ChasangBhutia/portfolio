#!/bin/bash
# simple-interest.sh
# A script to calculate simple interest

# Ask the user for principal, rate, and time
read -p "Enter Principal amount: " principal
read -p "Enter Rate of interest (in %) : " rate
read -p "Enter Time (in years) : " time

# Calculate simple interest
simple_interest=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)

# Display the result
echo "Simple Interest = $simple_interest"
