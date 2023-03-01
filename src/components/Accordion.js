import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


const AccordionPage = () => {
  return (
    <Accordion defaultActiveKey="0" className="service-details__faq">
      <Accordion.Item eventKey="0" className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion">
        <Accordion.Header className="accrodion-title"><h4>What is cloud computing?</h4> </Accordion.Header>
        <Accordion.Body className="accrodion-content">
        Cloud computing is a model of delivering IT services over the internet, where computing resources and data are stored on remote servers and accessed via the internet.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion">
        <Accordion.Header className="accrodion-title"><h4>What are the benefits of using cloud services?</h4> </Accordion.Header>
        <Accordion.Body className="accrodion-content">
        The benefits of using cloud services include cost savings, increased scalability and flexibility, and improved security and disaster recovery.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion">
        <Accordion.Header className="accrodion-title"><h4>What types of services are offered in the cloud?</h4> </Accordion.Header>
        <Accordion.Body className="accrodion-content">
        Common cloud services include Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion">
        <Accordion.Header className="accrodion-title"><h4>How does cloud computing differ from traditional IT infrastructure?</h4> </Accordion.Header>
        <Accordion.Body className="accrodion-content">
        Cloud computing differs from traditional IT infrastructure in that it is delivered over the internet, and users do not need to manage physical hardware or software. This allows for greater scalability and flexibility, as well as reduced costs.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion">
        <Accordion.Header className="accrodion-title"><h4>What are the security concerns with cloud computing?</h4> </Accordion.Header>
        <Accordion.Body className="accrodion-content">
        Some of the security concerns with cloud computing include data privacy, data security, and the possibility of service disruptions.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion">
        <Accordion.Header className="accrodion-title"><h4>How do you choose a cloud service provider?</h4> </Accordion.Header>
        <Accordion.Body className="accrodion-content">
        When choosing a cloud service provider, it is important to consider factors such as the provider's security and privacy policies, the level of support and reliability offered, and the cost and scalability of the services offered. It is also important to carefully evaluate the provider's reputation and track record in the industry.
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
  )
}

export default AccordionPage