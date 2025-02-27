/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2021 Lockstep, Inc.
 * @version    2021.39
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

/**
 * Represents the results of a query.  The total number of records matching the query are in the `totalCount` parameter.
 * You can use `pageSize` and `pageNumber` to continue fetching data until `totalCount` is reached.
 */
 export class FetchResult<T> {
    records: T[] | null;
    totalCount: number;
    pageSize: number;
    pageNumber: number;
    
    constructor()
    {
        this.records = null;
        this.totalCount = 0;
        this.pageNumber = 0;
        this.pageSize = 0;
    }
}
