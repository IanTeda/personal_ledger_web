#! /bin/sh

## # Environment Variable Replacement Script
##
## This script is used to replace the environment variables in the web-app files
## with the values that are set in the environment. This is done to ensure that
## the web-app is able to connect to the correct backend services.
##
## The script is run as part of the Dockerfile build process and is not intended
## to be run manually.
##
## ## Reference
##
## - https://stackoverflow.com/questions/415677/how-to-replace-placeholders-in-a-text-file
## - https://stackoverflow.com/questions/29613304/how-to-replace-environment-variables-in-a-file-in-docker-container-during-docker
## - [Dynamic Environment Variables for Dockerize React Apps ](https://dev.to/sanjayttg/dynamic-environment-variables-for-dockerized-react-apps-5bc5)
## - [Setting Up Dynamic Environment Variables with Vite and Docker](https://dev.to/dutchskull/setting-up-dynamic-environment-variables-with-vite-and-docker-5cmj)

# if [ -z "$APP_ENV_PREFIX" ]; then
#     echo "APP_ENV_PREFIX is not set. Exiting."
#     exit 1
# fi

for i in $(env | grep "^$PERSONAL_LEDGER"); do
    key=$(echo "$i" | cut -d '=' -f 1)
    value=$(echo "$i" | cut -d '=' -f 2-)

    echo "$key=$value"

    find "/usr/share/nginx/html/web-app" -type f -exec sed -i 's|'"${key}"'|'"${value}"'|g' {} \;
    find "/tmpl/dist/web-app/" -type f -exec sed -i 's|'"${key}"'|'"${value}"'|g' {} \;  
done
