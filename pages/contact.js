import Navbar from '../components/Navbar';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
        <Navbar />
        <div class="container-form">
          <div class="contact-box-form">
            <div class="left-form">
            </div>

            <div class="right-form">
              <h2 className="title-form">Contactanos</h2>
              <input type="text" className="field-form rounded-lg" placeholder="Nombre" />
              <input type="text" className="field-form rounded-lg" placeholder="Correo Electronico" />
              <input type="text" className="field-form rounded-lg" placeholder="Teléfono" />
              <textarea placeholder="Mensaje" className="field-form txt-form rounded-lg"></textarea>
              <button class="btn-form rounded-full">Enviar</button>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}