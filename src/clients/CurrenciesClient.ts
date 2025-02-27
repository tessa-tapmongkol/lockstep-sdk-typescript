/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.2
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

import { LockstepApi } from "../LockstepApi.js";
import { LockstepResponse } from "../models/LockstepResponse.js";
import { CurrencyRateModel } from "../models/DataModels.js";
import { BulkCurrencyConversionModel } from "../models/DataModels.js";

export class CurrenciesClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieve a currency conversation rate from one currency to another as of the specified date.              Optionally, you can specify which currency data provider to use.
   *
   *              The currency rate model contains all of the information used to make the API call, plus the rate to              use for the conversion.
   *
   * @param sourceCurrency The ISO 4217 currency code of the origin currency. For a list of currency codes, call List Currencies.
   * @param destinationCurrency The ISO 4217 currency code of the target currency. For a list of currency codes, call List Currencies.
   * @param date The date for which we should cto use for this currency conversion.
   * @param dataProvider Optionally, you can specify a data provider.
   */
  retrievecurrencyrate(sourceCurrency: string, destinationCurrency: string, date: string, dataProvider: string): Promise<LockstepResponse<CurrencyRateModel>> {
    const url = `/api/v1/Currencies/${sourceCurrency}/${destinationCurrency}`;
    const options = {
      params: {
        date,
        dataProvider,
      },
    };
    return this.client.request<CurrencyRateModel>('get', url, options, null);
  }

  /**
   * Receives an array of dates and currencies and a destination currency and returns an array of the corresponding currency rates to the given destination currency (Limit X).
   *
   * @param destinationCurrency The currency to convert to.
   * @param body A list of dates and source currencies.
   */
  bulkcurrencydata(destinationCurrency: string, body: BulkCurrencyConversionModel[]): Promise<LockstepResponse<CurrencyRateModel[]>> {
    const url = `/api/v1/Currencies/bulk`;
    const options = {
      params: {
        destinationCurrency,
      },
    };
    return this.client.request<CurrencyRateModel[]>('post', url, options, body);
  }
}
