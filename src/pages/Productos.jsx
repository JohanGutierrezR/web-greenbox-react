import React from 'react'; // Importa React
import '../components/css/Productos.css';
import img from '../img/Cereales/Avena/image2.jpeg';
import img1 from '../img/Especias/Cilantro/images.jpeg';
import img2 from '../img/frutas/Banano/image2.jpg';
import img3 from '../img/legumbres/Frijol/image2.jpg';
import img4 from '../img/Vegetales/Calabaza/image2.jpeg';
import img5 from '../img/Vegetales/Ahuyama/ahuyama1.jpeg';
import img6 from '../img/legumbres/Habas/habas1.jpeg';
import img7 from '../img/frutas/Fresas/image5.jpeg';
import img8 from '../img/Especias/Comino/imagen2.jpeg';
import img9 from '../img/Cereales/Maiz/imagen2.jpg';

export const Productos = () => {
	return (
		<>
			<div id='productos'>
				<div className='productos '>
					<div className='title'>
						<h1>Productos Agrícolas</h1>{' '}
						{/* Corregido "Agricolas" por "Agrícolas" */}
						<div className='texto'>
							<p>
								Conectamos a los consumidores directamente con los productores
								evitando a los intermediarios brindando mayor calidad a menor
								precio
							</p>
						</div>
					</div>
					<div className='imagenes'>
						<div className='contenido-imagenes contenedor'>
							<div className='imge'>
								<img className='imagen1' src={img} alt='Avena' />
								<p>Avena</p>
							</div>
							<div className='imge'>
								<img className='imagen2' src={img1} alt='cilantro' />
								<p>Cilantro</p>
							</div>
							<div className='imge'>
								<img className='imagen3' src={img2} alt='banano' />
								<p>Bananos</p>
							</div>
							<div className='imge'>
								<img className='imagen4' src={img3} alt='frijoles' />
								<p>Frijoles</p>
							</div>
							<div className='imge'>
								<img className='imagen5' src={img4} alt='calabazas' />
								<p>Calabazas</p>
							</div>
						</div>
					</div>
					<div className='imagenes1'>
						<div className='imge'>
							<div className='contenido-imagenes contenedor'>
								<div className='imge'>
									<img className='imagen6' src={img5} alt='ahuyama' />
									<p>Ahuyama</p>
								</div>
								<div className='imge'>
									<img className='imagen7' src={img6} alt='Habas' />
									<p>Habas</p>
								</div>
								<div className='imge'>
									<img className='imagen8' src={img7} alt='fresa' />
									<p>Fresa</p>
								</div>
								<div className='imge'>
									<img className='imagen9' src={img8} alt='comino' />
									<p>Comino</p>
								</div>
								<div className='imge'>
									<img className='imagen10' src={img9} alt='maiz' />
									<p>Maíz</p> {/* Corregido "Maiz" por "Maíz" */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Productos; // Exporta Productos para poder usarlo en otros archivos
