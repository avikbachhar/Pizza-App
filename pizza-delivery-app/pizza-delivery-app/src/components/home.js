import React, { Component } from 'react';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
class Home extends Component {
    render() {
        return (
            <div className="container">
            <div className='text-center'>
                <h1> Our Story</h1>
            </div>
            <div>
                <p>We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up h wacky and tun excuses The person witn the best excuse won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response proved that Pizzeria's Fresn Pan Pizza is the Tastiest Pan Pizza. Ever !</p>
            </div>
            <div>
            Ever since we launched the Tastiest Pan Pizza, ever, people have not been able to resist the softest, cheesiest, crunchiest, butteriest Domino's Fresh Pan Pizza They have been leaving the stage in the middle of a performance and even finding excuses to be disqualified in a football match.
            </div><br />
            <div>
                <p>We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up h wacky and tun excuses The person witn the best excuse won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response proved that Pizzeria's Fresn Pan Pizza is the Tastiest Pan Pizza. Ever !</p>
            </div>

            <div className="row row-height">
                <div className="col-lg-6">
                    <img className ="imgcss" src={img1} alt="ingredients" />
                </div>

                <div className="col-lg-6">
                    <br /><br /><br />
                    <div className="row">
                        <h3>Ingredients</h3>
                    </div>

                    <div className="row">
                        <p>We're ruthless about goodness. We nave no qualms about tearing up a day-old
                            lettuce leat (straight trom the farm), or steaming a baby (carrot). Cut Cut Chop.
                            Chop. Steam. Steam. Stir Stir. While they're still young and tresn - that's our motto. It
                            makes the kitchen a better place</p>
                    </div>
                </div>

            </div>
            <div className="row">
                

                <div className="col-lg-6">
                    <br /><br /><br />
                    <div className="row">
                        <h3>Our Chefs</h3>
                    </div>

                    <div className="row">
                        <p>They make sauces sing and salads dance. They create magic witn skill, knowledge, passion, and stirring spoons (among other things). They make goodness so good, It doesn't know what to do witn itself. We do though. We send it to you.</p>
                    </div>
                </div>
                <div className="col-lg-6 pull-right ">
                    <img  className ="imgcss" src={img2} alt="chefs" />
                </div>

            </div>
            <div className="row">
                <div className="col-lg-6">
                    <img className ="imgcss" src={img3} width='100%' alt="delivery" />
                </div>

                <div className="col-lg-6">
                <br /><br /><br /><br /><br /><br />
                    <div className="row">
                        <h1>45 min delivery</h1>
                    </div>
                </div>

            </div>
            <div className="copyright">
                <center><p>Copyrights @ 2022 Pizzeria. All rights reserved</p></center>
            </div>

        </div>
        );
    }
}

export default Home;