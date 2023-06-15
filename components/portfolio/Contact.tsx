/*
import { ReactComponent as Linkedin } from 'public/linkedin.svg';
import { ReactComponent as Mail } from 'public/mail.svg';
import { ReactComponent as Github } from 'public/github.svg';
*/
import { ReactElement } from 'react';

const ContactMethod: React.FC<{ handle: string}> = ({ handle }) => {

    return (
        <div style={{ "display": "flex", "alignItems": "center", "gap": "10px", "marginBottom": "10px" }}>
            <span className="contact-handle">{handle}</span>
        </div>
    )
}

const Contact: React.FC = (): ReactElement => {
    return (
        <div style={{ "color": "#fff" }}>
            <ContactMethod /*Icon={Mail}*/ handle="ksucpea@gmail.com" />
            <ContactMethod /*Icon={Github}*/ handle="github.com/ksucpea" />
            <ContactMethod /*Icon={Linkedin}*/ handle="linkedin.com/geomills" />
        </div>
    )
}

export default Contact;