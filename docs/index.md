# Ezrah-DID

## A Scalable Identity Method for Ethereum (EVM) Addresses

> disclaimer: This version is entirely based off the project by uPort ethr-did. This is an attempt at scaling the functionalities for multiple application across various industries.

Using the Ezrah-DID library, you can:

- Create and manage keys for DID identities

- Sign JSON Web Tokens

- Authorize third parties to sign on a DID's behalf

- Enable discovery of service endpoints (e.g. decentralized identity management services)

The Ezrah-DID library conforms to [ERC-1056](https://github.com/ethereum/EIPs/issues/1056) and supports the proposed
Decentralized Identifiers spec from the W3C Credentials Community Group. These allow for Ethereum addresses and public
keys to be used as fully self-managed Decentralized Identifiers (DIDs), as a result, you can easily create and manage
keys for these identities. This library also allows you to sign standard compliant JSON Web Tokens (JWTs) that can be
consumed using the DID-JWT library.
