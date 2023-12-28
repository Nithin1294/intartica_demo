import React, { Component } from 'react';
import './believe.css';
class Believe extends Component {
    state = {  } 
    render() { 
        return (
            <div className='six-container container d-flex'>
                <div className='believe-img'>
                    <img src="https://s3-alpha-sig.figma.com/img/b2b0/02b5/6ce50e89dccb95c2ace5608e3c3e76bd?Expires=1704672000&Signature=KDP8GkFTS5KxDCNLGQt135~OjH9OQYA8CZo-zmYeu0vF-1UznrEty3jIZGPA9s-AGf05oXWFtUgagQB5q~rgaCVpR0zZdjUaN~kV7mDqnNfz5qEvmnlZSNJNRzEs-Z7CQz3gyCdZmZ5L9br-UYGEtLoXB3xfO6eSLkQwUL3tTz-aeJM3p9mYkTwunJI7Qtw3ufCJBS26N7xiZI~r3iOyBFWe6QI9yPatZaEJSlyeVN52h-qSdClG-jJ6H2kab0EVkHZ8Tyo-wkxETa~aIgIvGA3UMtfzjsm5upmPFDTYiHWHHlRvXGi86-Dl2WOsuIKvH1hmfTeK1PuMOdoq2I~ckg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="believe-img"/>

                </div>
                <div className='believe-right-container d-flex flex-column'>
                    <h1>We Believe in Unique Design</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and ypesetting industry. Lorem Ipsum.</p>

                </div>
            </div>
        );
    }
}
 
export default Believe;