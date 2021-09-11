import React from 'react'

const Tableau = ({ arrays }) => {


    const tableau = arrays.map(value => {
        const tab = value.alphabet;
        const slice = [tab.slice(0, 4), tab.slice(4, 8), tab.slice(8, 12), tab.slice(12, 16), tab.slice(16, 20), tab.slice(20, 24), tab.slice(24, 28)]
        return slice;
    });
    const tab = tableau;
    console.log(tab);
    return (

        <div className="arrays">
            <table>
                <thead>

                    {arrays.map((item) => (
                        <tr>
                            {Object.values(item.colonne).map((val) => (
                                <th    >{val.value}</th>
                            ))}
                        </tr>
                    ))}

                </thead>
                <tbody>


                    {tab.map((item, index) => {
                        console.log(item);
                        return (
                            <tr>
                                <td>Block {item[0][0]}</td>
                                <td>Block {item[0][1]}</td>
                                <td>Block {item[0][2]}</td>
                                <td>Block {item[0][3]}</td>
                                <td>Block {item[0][0] + '+' + item[0][1] + '+' + item[0][2] + '+' + item[0][3]}</td>
                            </tr>
                        );
                    })}



                    {tab.map((item, index) => {
                        console.log(item);
                        return (
                            <tr>
                                <td>Block {item[1][0] + '+' + item[1][1] + '+' + item[1][2] + '+' + item[1][3]}</td>
                                <td>Block {item[1][0]}</td>
                                <td>Block {item[1][1]}</td>
                                <td>Block {item[1][2]}</td>
                                <td>Block {item[1][3]}</td>

                            </tr>
                        );
                    })}
                    {tab.map((item, index) => {
                        console.log(item);
                        return (
                            <tr>

                                <td>Block {item[2][0]}</td>
                                <td>Block {item[2][0] + '+' + item[2][1] + '+' + item[2][2] + '+' + item[2][3]}</td>
                                <td>Block {item[2][1]}</td>
                                <td>Block {item[2][2]}</td>
                                <td>Block {item[2][3]}</td>

                            </tr>
                        );
                    })}
                    {tab.map((item, index) => {
                        console.log(item);
                        return (
                            <tr>

                                <td>Block {item[3][0]}</td>
                                <td>Block {item[3][1]}</td>
                                <td>Block {item[3][0] + '+' + item[3][1] + '+' + item[3][2] + '+' + item[3][3]}</td>
                                <td>Block {item[3][2]}</td>
                                <td>Block {item[3][3]}</td>

                            </tr>
                        );
                    })}
                    {tab.map((item, index) => {
                        console.log(item);
                        return (
                            <tr>

                                <td>Block {item[4][0]}</td>
                                <td>Block {item[4][1]}</td>

                                <td>Block {item[4][2]}</td>
                                <td>Block {item[4][0] + '+' + item[4][1] + '+' + item[4][2] + '+' + item[4][3]}</td>
                                <td>Block {item[4][3]}</td>

                            </tr>
                        );
                    })}
                    {tab.map((item, index) => {
                        console.log(item);
                        return (
                            <tr>

                                <td>Block {item[5][0]}</td>
                                <td>Block {item[5][1]}</td>
                                <td>Block {item[5][2]}</td>
                                <td>Block {item[5][3]}</td>
                                <td>Block {item[5][0] + '+' + item[5][1] + '+' + item[5][2] + '+' + item[5][3]}</td>

                            </tr>
                        );
                    })}

                    {tab.map((item, index) => {
                        console.log(item);
                        return (
                            <tr>

                                <td>Block {item[6][0] + '+' + item[6][1] + '+' + item[0][0] + '+' + item[0][1]}</td>
                                <td>Block {item[6][0]}</td>
                                <td> Block {item[6][1]}</td>
                                <td> Block {item[0][0]}</td>
                                <td> Block {item[0][1]}</td>


                            </tr>
                        );
                    })}



                    {tab.map((item, index) => {
                        console.log(item);
                        return (
                            <tr>


                                <td>Block {item[0][2]}</td>
                                <td>Block {item[0][2] + '+' + item[0][3] + '+' + item[1][0] + '+' + item[1][1]}</td>
                                <td> Block {item[0][3]}</td>
                                <td> Block {item[1][0]}</td>
                                <td> Block {item[1][1]}</td>


                            </tr>
                        );
                    })}

                    {tab.map((item, index) => {
                        console.log(item);
                        return (
                            <tr>


                                <td>Block {item[1][2]}</td>
                                <td> Block {item[1][3]}</td>
                                <td>Block {item[1][2] + '+' + item[1][3] + '+' + item[2][0] + '+' + item[2][1]}</td>

                                <td> Block {item[2][0]}</td>
                                <td> Block {item[2][1]}</td>


                            </tr>
                        );
                    })}

                    {tab.map((item, index) => {
                        console.log(item);
                        return (
                            <tr>


                                <td>Block {item[2][2]}</td>
                                <td> Block {item[2][3]}</td>
                                <td> Block {item[3][0]}</td>
                                <td>Block {item[2][2] + '+' + item[2][3] + '+' + item[3][0] + '+' + item[3][1]}</td>
                                <td> Block {item[3][1]}</td>


                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>

    )
}

export default Tableau;