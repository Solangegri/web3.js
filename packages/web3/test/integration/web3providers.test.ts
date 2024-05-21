/*
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

import { mainnet} from "web3-providers";
import { Web3 } from '../../src/index';

describe('Web3 Provider Integration tests', () => {

    it(`should work with mainnet provider`, async () => {
        const web3 = new Web3(mainnet);
        const result = await web3.eth.getBlockNumber()
        expect(typeof result).toBe('bigint');
        expect(result > 0).toBe(true);

    });

    it(`should work with default provider`, async () => {
        const web3 = new Web3();
        const result = await web3.eth.getBlockNumber()
        expect(typeof result).toBe('bigint');
        expect(result > 0).toBe(true);

    });
});