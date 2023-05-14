import React from 'react'

const Theme = () => {
    return (
        <div className='c1'>
            <div className='c2'>
            <h1>Theme</h1>
            </div>
            <table>
                <tr bgcolor="#FFC300">
                    <th>Theme</th>
                    <th>Mix</th>
                    <th>Allocation %</th>
                    <th>Risk</th>
                    <th>Investment Horizon</th>

                </tr>
                <tr>
                    <td rowSpan={3}>Aggressive</td>
                    <td>Equities</td>
                    <td>75%</td>
                    <td rowSpan={3}>High</td>
                    <td rowSpan={3}>Long Term</td>

                </tr>
                <tr>
                    {/* <td></td> */}
                    <td>Commodities</td>
                    <td>15%</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                <tr>
                    {/* <td></td> */}
                    <td>Alternative Investments</td>
                    <td>10%</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>

            </table>

        </div>
    )
}

export default Theme
