import React from 'react';

// class App extends React.Component {
//    render() {

//         var myStyle = {
//             fontSize: 100,
//             color: '#FF0000'
//         }

//         return (
//             <div>
//                 <h1 style = {myStyle}>Doomsday Header</h1>
//                 {/* write comments like this */}
//                 <h2>Vaughnvillain</h2>
//                 <p data-myattribute = "somevalue">{ 1+1 }</p>
//             </div>
//         );

//       /* ==== Logic in html ternary only
//       var i = 4;
//       return (

//          <div>
//             <h1>Doomsday</h1>
//             <h2>Vaughnvillain</h2>
//             <p data-myattribute = "somevalue">{ 1+1 }</p>
//             <p>{ i == 1 ? 'True!' : 'False' }</p>
//          </div>
//       );
//       */
//    }
// }

// class App extends React.Component {
//    render() {
//         return (
//             <div>
//                 <Header/>
//                 <Content/>
//             </div>
//         );
//    }
// }


class Header extends React.Component {
    render() {
        return (
            <h1>Header</h1>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>Aaaayyyyyeeee!</p>
            </div>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            data:
            [
                {
                    "id":1,
                    "name":"Jeff",
                    "age":"20"
                },

                {
                    "id":2,
                    "name":"Victor",
                    "age":"30"
                },

                {
                    "id":3,
                    "name":"Sally",
                    "age":"40"
                },
            ]
        }
    }

    render() {
        return(
            <div>
                <Header/>
                <table>
                    <tbody>
                        {this.state.data.map((person,i) => <TableRow key = {i} data = {person} />)}
                    </tbody>
                </table>
            </div>
        );

    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

export default App;