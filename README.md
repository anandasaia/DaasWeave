
# DaasWeave

A marketplace for Datasets as atomic assets on Arweave. Built on top of Atomic Asset Creator.

## Features

-   UDL support
-   KWIL server proxy for a better user experience
-   Dataset Downloader in the form of dataset creator 
-  Can add as many gateways as you need
-   Pauses for 5(modifiable) seconds after every 10(modifiable) requests to avoid rate-limiting.
-  Block Ranges Distributed using round-robin scheduling

## Usage

1.  Run server.js in kwil/testing final folder using `node server.js`(Only to see Kwil proxy server in action. Replace with your private keys and kwil db data to succesfully run it).
    
2.  Go to DaaSWeaveUploader folder, run `yarn` followed by `yarn dev`
    
