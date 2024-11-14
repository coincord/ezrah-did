import { EzrahDID } from '../index'

describe('other networks', () => {
  it('supports rsk - github #50', () => {
    const ezrahDid = new EzrahDID({
      identifier: '0x02b97c30de767f084ce3080168ee293053ba33b235d7116a3263d29f1450936b71',
      chainNameOrId: 'rsk',
    })
    expect(ezrahDid.did).toEqual('did:ezrah:rsk:0x02b97c30de767f084ce3080168ee293053ba33b235d7116a3263d29f1450936b71')
    expect(ezrahDid.address).toEqual('0xC662e6c5F91B9FcD22D7FcafC80Cf8b640aed247')
  })

  it('supports rsk:testnet - github #50', () => {
    const ezrahDid = new EzrahDID({
      identifier: '0x02b97c30de767f084ce3080168ee293053ba33b235d7116a3263d29f1450936b71',
      chainNameOrId: 'rsk:testnet',
    })
    expect(ezrahDid.did).toEqual(
      'did:ezrah:rsk:testnet:0x02b97c30de767f084ce3080168ee293053ba33b235d7116a3263d29f1450936b71'
    )
    expect(ezrahDid.address).toEqual('0xC662e6c5F91B9FcD22D7FcafC80Cf8b640aed247')
  })

  it('supports rsk as did string', () => {
    const ezrahDid = new EzrahDID({
      identifier: 'did:ezrah:rsk:0x02b97c30de767f084ce3080168ee293053ba33b235d7116a3263d29f1450936b71',
    })
    expect(ezrahDid.did).toEqual('did:ezrah:rsk:0x02b97c30de767f084ce3080168ee293053ba33b235d7116a3263d29f1450936b71')
    expect(ezrahDid.address).toEqual('0xC662e6c5F91B9FcD22D7FcafC80Cf8b640aed247')
  })

  it('supports rsk:testnet as did string', () => {
    const ezrahDid = new EzrahDID({
      identifier: 'did:ezrah:rsk:testnet:0x02b97c30de767f084ce3080168ee293053ba33b235d7116a3263d29f1450936b71',
    })
    expect(ezrahDid.did).toEqual(
      'did:ezrah:rsk:testnet:0x02b97c30de767f084ce3080168ee293053ba33b235d7116a3263d29f1450936b71'
    )
    expect(ezrahDid.address).toEqual('0xC662e6c5F91B9FcD22D7FcafC80Cf8b640aed247')
  })

  it('supports rsk:testnet:custom:params as did string', () => {
    const ezrahDid = new EzrahDID({
      identifier:
        'did:ezrah:rsk:testnet:custom:params:0x02b97c30de767f084ce3080168ee293053ba33b235d7116a3263d29f1450936b71',
    })
    expect(ezrahDid.did).toEqual(
      'did:ezrah:rsk:testnet:custom:params:0x02b97c30de767f084ce3080168ee293053ba33b235d7116a3263d29f1450936b71'
    )
    expect(ezrahDid.address).toEqual('0xC662e6c5F91B9FcD22D7FcafC80Cf8b640aed247')
  })

  it('supports hexstring chainId', () => {
    const ezrahDid = new EzrahDID({
      identifier: '0x02b97c30de767f084ce3080168ee293053ba33b235d7116a3263d29f1450936b71',
      chainNameOrId: '0x3',
    })
    expect(ezrahDid.did).toEqual('did:ezrah:0x3:0x02b97c30de767f084ce3080168ee293053ba33b235d7116a3263d29f1450936b71')
    expect(ezrahDid.address).toEqual('0xC662e6c5F91B9FcD22D7FcafC80Cf8b640aed247')
  })

  it('supports numbered chainId', () => {
    const ezrahDid = new EzrahDID({
      identifier: '0x02b97c30de767f084ce3080168ee293053ba33b235d7116a3263d29f1450936b71',
      chainNameOrId: 42,
    })
    expect(ezrahDid.did).toEqual('did:ezrah:0x2a:0x02b97c30de767f084ce3080168ee293053ba33b235d7116a3263d29f1450936b71')
    expect(ezrahDid.address).toEqual('0xC662e6c5F91B9FcD22D7FcafC80Cf8b640aed247')
  })
})
