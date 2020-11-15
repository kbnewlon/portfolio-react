import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../component/Footer/index'
import Navbar from '../component/Navbar/index';
import "./style.css"

function Portfolio() {
    return (
        <>
            <Navbar />

            <Container className="portfolioDiv">
                <Row>
                    <Col>
                        <Card className="portfolioCard" style={{ width: '25rem' }} >
                            <Card.Img variant="top" src="images/screenshot_homepage.PNG" />
                            <Card.Body>
                                <Card.Title>The Cold West Tour Co</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">MySQL2, Express, Handlebars, Sequelize</Card.Subtitle>
                                <Card.Text>
                                    <p>Join The Cold West Tours this winter and find your perfect outdoor activity for every mood, style, and condition. Your adventure awaits.</p>
                                    <p>Our team has together all ten ski and snowboard resorts in Washington State. Start your winter sport planning here! Create an account with us to save your favorite winter activity and favorite lodge. We hope you like it!</p>
                                    <p>*not a real tour company</p>
                                </Card.Text>
                                <Card.Link href="https://github.com/kbnewlon/burger">GO TO GITHUB REPO</Card.Link>
                                <Card.Link href="https://a-virtual-burger-shack.herokuapp.com/">GO TO DEPLOYED APP</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="portfolioCard" style={{ width: '25rem' }}>
                            <Card.Img variant="top" src="images/screenshot_covid_tracker.png" />
                            <Card.Body>
                                <Card.Title>Covid-19 Resource Page</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">APIs, Pure.CSS, Interactive</Card.Subtitle>
                                <Card.Text>
                                    <p> Use this app as a hub of peer reviewed, reliable, Covid information. This application was developed to monitor the density of COVID-19 cases by county as well as to give the user resources for the pandemic. Along with an interactive map of active cases, we have supplied a COVID-19 testing location finder, recent top peer reviewed articles related to the virus as well as a link to the Centers for Disease Control and Prevention (CDC) homepage.</p>
                                </Card.Text>
                                <Card.Link href="https://github.com/jjainga/Covid-19-Resource-Page">GO TO GITHUB REPO</Card.Link>
                                <Card.Link href="https://jjainga.github.io/Covid-19-Resource-Page/">GO TO DEPLOYED APP</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="portfolioCard" style={{ width: '25rem' }}>
                            <Card.Img variant="top" src="images/screenshot_employee_tracker.PNG" />
                            <Card.Body>
                                <Card.Title>Content Management System</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Node, Inquirer, MySQL</Card.Subtitle>
                                <Card.Text>
                                    <p>An easy to use interface for non-developers to view and interact with information stored in databases.
                                    This command-line application allows users to:
                    <ul>
                                            <li>Add departments, roles, employees</li>
                                            <li>View departments, roles, employees</li>
                                            <li>Update employee roles</li>
                                        </ul>
                                    </p>
                                </Card.Text>
                                <Card.Link href="https://github.com/kbnewlon/employee-tracker">GO TO GITHUB REPO</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                   
                    <Col>
                        <Card className="portfolioCard" style={{ width: '25rem' }}>
                            <Card.Img variant="top" src="images/screenshot_employee_directory.PNG" />
                            <Card.Body>
                                <Card.Title>Employee Directory</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">React, API</Card.Subtitle>
                                <Card.Text>
                                    <p>This application has been created with an random user API to compile a faux employee directory using React. The application has been split up into three components to display the image, name, phone number, email address, and age of each 'employee'.</p>
                                </Card.Text>
                                <Card.Link href="https://github.com/kbnewlon/employee-directory">GO TO GITHUB REPO</Card.Link>
                                <Card.Link href="https://kbn-employee-directory.herokuapp.com/">GO TO DEPLOYED APP</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="portfolioCard" style={{ width: '25rem' }}>
                            <Card.Img variant="top" src="images/screenshot_burger_app.PNG" />
                            <Card.Body>
                                <Card.Title>It's Come To This:<br /> A Virtual Burger Shack</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">MySQL, Node, Express, Handlebars, ORM</Card.Subtitle>
                                <Card.Text>
                                    <p>Quarantine keeping you from eating what you really want? This virtual burger application combines the use MySQL, Node, Express, Handlebars, as well as its very own homemade ORM (yum!) Don't bother with those pesky germs, Use this app to create and DEVOUR your very own virtual burger. Bon appetit!</p>
                                </Card.Text>
                                <Card.Link href="https://github.com/kbnewlon/Cold-West-Tours">GO TO GITHUB REPO</Card.Link>
                                <Card.Link href="https://the-cold-west.herokuapp.com/">GO TO DEPLOYED APP</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="portfolioCard" style={{ width: '25rem' }}>
                            <Card.Img variant="top" src="images/screenshot_workout-tracker.PNG" />
                            <Card.Body>
                                <Card.Title>Fitness Tracker 2020</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Express, Mongo DB, Mongoose</Card.Subtitle>
                                <Card.Text>
                                    <p> Use this application to view, create and track daily workouts. The user can log multiple exercises in a workout on a given day. Fitness Tracker 2020 allows the user to be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, the user can track the distance traveled.</p>
                                </Card.Text>
                                <Card.Link href="https://github.com/kbnewlon/workout-trackere">GO TO GITHUB REPO</Card.Link>
                                <Card.Link href="https://preparingfortheapocalypse2020.herokuapp.com/">GO TO DEPLOYED APP</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

            <Footer />
        </>
    )
}

export default Portfolio; 