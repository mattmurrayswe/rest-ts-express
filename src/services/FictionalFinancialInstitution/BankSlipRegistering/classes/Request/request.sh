#! /bin/sh
echo -n "$(cat /tmp/request.txt)" | openssl dgst -sha256 -keyform pem -sign ./app/src/services/FictionalFinancialInstitution/BankSlipRegistering/storage/key.com.key.pem -out /tmp/request.txt.256
base64 /tmp/request.txt.256