#!/bin/bash
# Authors : Isabelle Brandes
# Date: 09/17/2020
sudo cp /var/log/syslog /home
sudo grep -i error /home/syslog | sudo tee /home/error_log_check.txt
sudo mail -s 'hey' isbr3461@colorado.edu < /home/error_log_check.txt
