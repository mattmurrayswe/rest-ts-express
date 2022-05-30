#! /bin/sh
echo -n "$(cat /tmp/encodedHeaderPlusPayload.txt)" | openssl dgst -sha256 -keyform pem -sign ./app/src/services/FictionalFinancialInstitution/BankSlipRegistering/storage/key.com.key.pem -out /tmp/encodedHeaderPlusPayload.txt.256
base64 /tmp/encodedHeaderPlusPayload.txt.256