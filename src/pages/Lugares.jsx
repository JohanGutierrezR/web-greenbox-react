import React from 'react'; // Importa React
import img10 from '../img/Lugares de Cultivo/imagen1.jpg';
import img11 from '../img/Lugares de Cultivo/imagen2.jpg';
import img12 from '../img/Lugares de Cultivo/imagen3.jpg';
import img13 from '../img/Lugares de Cultivo/imagen4.jpg';
import img14 from '../img/Lugares de Cultivo/imagen5.jpg';
import img15 from '../img/Lugares de Cultivo/imagen6.jpg';
import '../components/css/Lugares.css';

export const Lugares = () => {
	return (
		<div id='lugares'>
			<div className='lugares'>
				<div className='title1'>
					<h1>Lugares de Cultivos</h1>
					<div className='texto1'>
						<p>
							Lograr cambiar el concepto del agronegocio en Colombia a través de
							la tecnología Ofrecer mayores ganancias a los productores Precios
							más económicos y mayor calidad a los consumidores 100 % de
							clientes satisfechos
						</p>
					</div>
					<div className='contenido-lugares'>
						<div className='img'>
							<img className='lugar1' src={img10} alt='lugar' />
							<img className='lugar1' src={img11} alt='lugar' />
							<img className='lugar1' src={img12} alt='lugar' />
							<img className='lugar1' src={img13} alt='lugar' />
							<img className='lugar1' src={img14} alt='lugar' />
							<img className='lugar1' src={img15} alt='lugar' />
						</div>
					</div>
				</div>
				<h2>GreenBox</h2>
			</div>
		</div>
	);
};
