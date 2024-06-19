import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
    <div>
        <h2 style={{ textAlign: 'center', margin: '20px 0', color: '#66FCF1' }}>Frequently Asked Questions</h2>
        <section className='my-5' id="About" style={{
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 0 10px rgba(102,252,241,1)',
            backgroundColor: '#1F2833'
        }}>
            <style type="text/css">
                {`
                    .custom-accordion-header {
                        background-color: #1F2833;
                        color: #66FCF1;
                        border: none;
                        }
                        .custom-accordion-body {
                            background-color: #1F2833;
                            color: #66FCF1;
                            }
                            .custom-accordion-header .accordion-button::after {
                                filter: brightness(0) invert(1); /* Change color of arrow */
                                }
                    .custom-accordion-header .accordion-button {
                        background-color: #1F2833;
                        color: #66FCF1;
                        }
                        `}
            </style>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="custom-accordion-header">
                        Accordion Item #1
                    </Accordion.Header>
                    <Accordion.Body className="custom-accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className="custom-accordion-header">
                        Accordion Item #2
                    </Accordion.Header>
                    <Accordion.Body className="custom-accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className="custom-accordion-header">
                        Accordion Item #3
                    </Accordion.Header>
                    <Accordion.Body className="custom-accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header className="custom-accordion-header">
                        Accordion Item #4
                    </Accordion.Header>
                    <Accordion.Body className="custom-accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
    </div>
    );
};

export default FAQ;
