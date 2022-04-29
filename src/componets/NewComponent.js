// import React, { Component } from 'react'
// import '../App.css'
// import isnta from './isnta.jpg'
// import insta2 from './insta2.jpg'

// class NewComponent extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          message:'My first react',
//          sub:"subscribe",
//          imgUrl:isnta,
//          count:0
         
// };
//     };
//     styles={
//         fontFamily:'sans-serif',
//         color:'purple'
//     };
//     buttonChange=()=>{
//       this.setState({
//         message: 'Am now an expert',
//         sub:window.alert('thank you for subscribing')
//       })
//     }
//     changePhoto=()=>{
//       this.setState({
//         imgUrl:insta2,
//         message: 'and this is me',
//       });
//     }
//     clickedButton=()=>{
//       this.setState({
//         count:this.state.count+1
//       })
//     }
    
//   render() {
//     const count = this.state.count;
//     return (
//       <div className='text-holder'>
//         <h1>Welcome to my page </h1>
//           <p style={this.styles}>{this.state.message}</p>
//           <p>
//             <button onClick={this.buttonChange}>{this.state.sub}</button>
//             <button onClick={this.clickedButton}>clicked {count} times</button>
//           </p>
//           <img style={{width:"70px", height:"80px"}} src={this.state.imgUrl} alt="" onClick={this.changePhoto}/>
//       </div>
//     )
//   }
// }
// export default NewComponent ;