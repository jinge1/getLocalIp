// 获取当前主机ip地址

const os = require('os')

// let macNet = {
//   "lo0": [
//     {
//       "address": "127.0.0.1",
//       "netmask": "255.0.0.0",
//       "family": "IPv4",
//       "mac": "00:00:00:00:00:00",
//       "internal": true,
//       "cidr": "127.0.0.1/8"
//     }, {
//       "address": "::1",
//       "netmask": "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
//       "family": "IPv6",
//       "mac": "00:00:00:00: 00: 00 ",
//       " scopeid ": 0,
//       " internal ": true,
//       " cidr ": "::1 / 128 "
//     }, {
//       " address ": " fe80::1 ",
//       " netmask ": " ffff: ffff: ffff: ffff::",
//       " family ": "IPv6",
//       "mac": "00:00:00:00:00:00",
//       "scopeid": 1,
//       "internal": true,
//       "cidr": "fe80::1/64"
//     }
//   ],
//   "en0": [
//     {
//       "address": "fe80::4f2:ed76:8a91: 86e f ",
//       " netmask ": " ffff: ffff: ffff: ffff::",
//       " family ": " IPv6 ",
//       " mac ": " 0 c: 4 d: e9: ca: cb: bb ",
//       " scopeid ": 5,
//       " internal ": false,
//       " ci dr ": " fe80::4 f2: ed76: 8 a91: 86e f / 64 "
//     }, {
//       " address ": " 172.21 .0 .197 ",
//       " netmask ": " 255.255 .0 .0 ",
//       " family ": " IPv4 ",
//       " mac ": " 0 c: 4 d: e9: c a: cb: bb ",
//       " internal ": false,
//       " cidr ": " 172.21 .0 .197 / 16 "
//     }
//   ],
//   " en1 ": [
//     {
//       " address ": " fe80::4e9: 67 d6: 6 b81: c95b ",
//       " netmask ": " ffff: ffff: ffff: ffff::",
//       " family ": " IPv6 ",
//       " mac ": " 88: 63: df: af: ee: b1 ",
//       " scopeid ": 6,
//       " internal ": false,
//       " cidr ": " fe80::4e9: 67 d6: 6 b81: c95b / 64 "
//     }, {
//       " address ": " 192.168 .31 .202 ",
//       " netmask ": " 255.255 .252 .0 ",
//       " family ": " IPv4 ",
//       " mac ": " 88: 63: df: af: ee: b1 ",
//       " internal ": false,
//       "cidr": "192.168.31.202/22"
//     }
//   ],
//   "awdl0": [
//     {
//       "address": "fe80::c12:9eff:fe71:df49",
//       "netmask": "ffff:ffff:ffff:ffff::",
//       "family": "IPv6",
//       "mac": "0e:12:9e:71:df:49",
//       "scopeid": 10,
//       "internal": false,
//       "cidr": "fe80::c12:9eff:fe71:df49/64"
//     }
//   ],
//   "utun0": [
//     {
//       "addr
//  ess ":" fe80::88 f6: c794: 3 c81: e361 "," netmask ":" ffff: ffff: ffff: ffff::"," family ":" IPv6 "," mac ":" 00: 00: 00: 00: 00: 00 "," scopeid "
// : 12,
//       "internal": false,
//       "cidr": "fe80::88f6:c794:3c81:e361/64"
//     }
//   ],
//   "vnic0": [
//     {
//       "address": "10.211.55.2",
//       "netmask": "255.255.255.
//  0 "," family ":" IPv4 "," mac ":" 00: 1 c: 42: 00: 00: 08 "," internal ":false," cidr ":" 10.211 .55 .2 / 24 "}],
//  " vnic1 ": [
//         {
//           " address ": " 10.37 .129 .2 ",
//           " netmask ": " 255.255 .255 .0 ",
//           " family ": " IPv4 ",
//           " mac ": " 00: 1 c: 42: 00: 00: 09 ",
//           " internal ": false,
//           " cidr ": " 10.37 .129 .2 / 24 "
//         }
//       ]
//     }
//
//     let win = {
//       "本地连接": [
//         {
//           "address": "fe80::10e0:ad48:f835:e5c8",
//           "netmask": "ffff:ffff:ffff:ffff::",
//           "family ": " IPv6 ",
//           " mac ": " 50: 9 a: 4 c: 2e: c2: ba ",
//           " scopeid ": 13,
//           " internal ": false,
//           " cidr ": " fe80::10e0: ad48: f835: e5c8 / 64 "
//         }, {
//           " address ": " 172.21 .21 .21 ",
//           " netmask ": " 255.255 .0 .0 ",
//           " family ": " IPv4 ",
//           " mac ": " 50: 9 a: 4 c: 2e: c2: ba ",
//           " internal ": false,
//           " cidr ": " 172.21 .21 .21 / 16 "
//         }
//       ],
//       " VMware Network Adapter VMnet1 ": [
//         {
//           " address ": " fe80::a44a: 6 d35: f040: ebfc ",
//           " netmask ": " ffff: ffff: ffff: ffff::",
//           " family ": " IPv6 ",
//           " mac ": " 00: 50: 56: c0: 00: 01 ",
//           " scopeid ": 12,
//           " internal ": false,
//           " cidr ": " fe80::a44a: 6 d35: f040: ebfc / 64 "
//         }, {
//           " address ": " 192.168 .143 .1 ",
//           " netmask ": " 255.255 .255 .0 ",
//           " family ": " IPv4 ",
//           " mac ": " 00: 50: 56: c0: 00: 01 ",
//           " internal ": false,
//           " cidr ": " 192.168 .143 .1 / 24 "
//         }
//       ],
//       " VMware Network Adapter VMnet8 ": [
//         {
//           " address ": " fe80::a9d4: e396: 5e c5: e16e ",
//           " netmask ": " ffff: ffff: ffff: ffff::",
//           " family ": " IPv6 ",
//           " mac ": " 00: 50: 56: c0: 00: 08 ",
//           " scopeid ": 2,
//           " internal ": false,
//           " cidr ": " fe80::a9d4: e396: 5e c5: e16e / 64 "
//         }, {
//           " address ": " 192.168 .237 .1 ",
//           " netmask ": " 255.255 .255 .0 ",
//           " family ": " IPv4 ",
//           " mac ": " 00: 50: 56: c0: 00: 08 ",
//           " internal ": false,
//           " cidr ": " 192.168 .237 .1 / 24 "
//         }
//       ],
//       " Loopback Pseudo - Interface 1 ": [
//         {
//           " address ": "::1 ",
//           " netmask ": " ffff: ffff: ffff: ffff: ffff: ffff: ffff: ffff ",
//           " family ": " IPv6 ",
//           " mac ": " 00: 00: 00: 00: 00: 00 ",
//           " scopeid ": 0,
//           " internal ": true,
//           " cidr ": "::1 / 128 "
//         }, {
//           " address ": " 127.0 .0 .1 ",
//           " netmask ": " 255.0 .0 .0 ",
//           " family ": " IPv4 ",
//           " mac ": " 00: 00: 00: 00: 00: 00 ",
//           " internal ": true,
//           " cidr ": " 127.0 .0 .1 / 8 "
//         }
//       ]
//     }

    function getIp() {
      // 获得网络接口列表
      const network = os.networkInterfaces()
      let ipArr = []

      let ip = '127.0.0.1'

      if ('本地连接' in network) { // windows
        ipArr = network['本地连接']
      }

      if ('en0' in network) { // unix
        ipArr = network['en0']
      }

      if (Array.isArray(ipArr) && ipArr.length > 0) {
        let ipItem = null
        for( let item of ipArr ){
          for( let [key, val] of item ){
            let realKey = key.replace(/\s+/g, '')
            if( realKey === 'family' && val === 'IPv4' ){
              ipItem = item
              break
            }
          }
          if( ipItem ){
            break
          }
        }
        if(ipItem){
          for( let [ipKey, ipVal] of ipItem ){
            let realIpKey = ipKey.replace(/\s+/g, '')
            let realIpVal = ipVal.replace(/\s+/g, '')
            if( realKey === 'address' && /^(\d{1,3}\.){3}\d{1,3}$/.test(ipVal) ){
              ip = realIpVal
              break
            }
          }
        }
      }


        // ipArr.forEach(item => {
        //   let {family, address} = item
        //   if (family === 'IPv4') {
        //     ip = address
        //   }
        // })

      return ip
    }

    console.log(getIp())
