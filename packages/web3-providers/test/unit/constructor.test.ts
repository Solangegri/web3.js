﻿/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/

import { Web3ExternalProvider } from '../../src/web3_provider';
import { Network, Transport } from '../../src/types';
import HttpProvider from 'web3-providers-http';
import WebSocketProvider from 'web3-providers-ws';

class MockWeb3ExternalHTTPProvider extends Web3ExternalProvider {
  getRPCURL(_network: Network, _transport: Transport, _token: string): string {
    return 'https://example.com/rpc';
  }
}

class MockWeb3ExternalWSProvider extends Web3ExternalProvider {
  getRPCURL(_network: Network, _transport: Transport, _token: string): string {
    return 'wss://example.com/';
  }
}

describe('Web3ExternalProvider', () => {
  it('should initialize the provider correctly', () => {
    const network: Network = Network.ETH_MAINNET;
    const transport: Transport = Transport.HTTPS;
    const token = 'your-token';

    const provider = new MockWeb3ExternalHTTPProvider(network, transport, token);

    expect(provider.provider).toBeInstanceOf(HttpProvider);
  });

  it('should initialize the provider with WebSocketProvider for WebSocket transport', () => {
    const network: Network = Network.ETH_MAINNET;
    const transport: Transport = Transport.WebSocket;
    const token = 'your-token';

    const provider = new MockWeb3ExternalWSProvider(network, transport, token);

    expect(provider.provider).toBeInstanceOf(WebSocketProvider);
  });
});