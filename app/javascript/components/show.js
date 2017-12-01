import React, { Component } from 'react';

 export default class Shows extends Component {

   render() {
     console.log(this.props)
     let navItems = this.props.home.map(function(s,i){
       return (
         <li key={i}><a href={s.link}>{s.name}</a></li>
       )
     })
     return (
      <div className="headerBox">
          <ul className="navBar">
            {navItems}
          </ul>
      </div>
     )
   }
 }
