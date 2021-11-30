#!/bin/bash

BUILD_GUI=false
START_GUI=false

while [[ $# -gt 0 ]]
do
  key="$1"
  case $key in
    --build|-b)
     BUILD_GUI=true
     echo "Build gui set to: $BUILD_GUI"
     ;;
    --start|-b)
     START_GUI=true
     echo "Start gui set to: $BUILD_GUI"
     ;;
    *)
     echo "Invalid key: $key"
     exit 1;
     ;;
   esac
   shift
 done

 echo
 echo

 function buildGui() {

   cd ../gui
   docker build -t marvel_searchbox_client .
 }

 function startGui() {

   docker run -d -p 3000:3000 marvel_searchbox_client
 }

 start=`date +%s`

 if [ $BUILD_GUI == true ]; then
   buildGui
 fi

 if [ $START_GUI == true ]; then
   startGui
   echo "Application should be running at http://localhost:3000"
 fi


end=`date +%s`

runtime=$((end-start))

echo
echo "Total time to start infrastructure: $runtime sec"

exit 0;