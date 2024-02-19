import React, { Component } from "react";
//import { Provider, Consumer } from "./context";
import { Provider } from "./context";
import "./App.css";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import PMapasRecorridos from "./pages/mapas/PMapasRecorridos";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu"; // Menu MenuOld
import ToTop from "./components/ToTop";
import PListadoMapas from "./pages/mapas/PListadoMapas";
import PHome from "./pages/PHome"; //PHome copy
import PZona from "./pages/PZona";
import PDesuscribir from "./pages/PDesuscribir";
import PNovedades from "./pages/novedades/PNovedades";
import PArboles from "./pages/arboles/PArboles";
import PArbol from "./pages/arboles/PArbol";
import PNovedad from "./pages/novedades/PNovedad";
import PLocalidad from "./pages/PLocalidad";
import ListadoGuiasAgenciasCovid from "./pages/variosmenu/ListadoGuiasAgenciasCovid";
import PAtractivo from "./pages/atractivo/PAtractivo";
import PEventos from "./pages/PEventos";
import PEvento from "./pages/PEvento";
import PListadoAtractivos from "./pages/atractivo/PListadoAtractivos";
import PListadoGastronomia from "./pages/gastronomia/PListadoGastronomia";
import PAlojamiento from "./pages/PAlojamiento";
import PFiltroAlojamiento from "./pages/variosmenu/PFiltroAlojamiento";
import PFiltroAlojamientoAdhiereCovid from "./pages/variosmenu/PFiltroAlojamientoAdhiereCovid";
import PFiltroAlojamientoAdhiereDosep from "./pages/variosmenu/PFiltroAlojamientoAdhiereDosep";
import PFiltroTemplateDosep from "./pages/variosmenu/PFiltroTemplateDosep";
import PGastronomiaDosep from "./pages/variosmenu/PGastronomiaDosep";
import PRiosYSaltos from "./pages/variosmenu/RiosYSaltos";
import PAgenciaViajes from "./pages/servicios/PAgenciaViajes";
import PGuiaTurismo from "./pages/servicios/PGuiaTurismo";
import OficinasTurismo from "./pages/OficinasTurismo";
import PAeropuerto from "./pages/servicios/PAeropuerto";
import PAlquileresAuto from "./pages/servicios/PAlquileresAuto";
import PCasasCambio from "./pages/servicios/PCasasCambio";
import PTaxis from "./pages/servicios/PTaxis";
import PArchivosApp from "./pages/variosmenu/PArchivosApp";
import PContacto from "./pages/variosmenu/PContacto";
import PDiques from "./pages/variosmenu/Diques";
import Recorridos from "./components/Recorridos";
import PComer from "./pages/gastronomia/PComer";
import PServicios from "./pages/servicios/PServicios";
import PParquesList from "./pages/variosmenu/ParquesList";
import PPermisoPesca from "./pages/servicios/PPermisoPesca";
import PCreerGnral from "./pages/PCreerGnral";
import PZonaCreer from "./pages/PZonaCreer";
import Prueba from "./pages/variosmenu/Prueba";
import PCerveceria from "./pages/gastronomia/PCerveceria";
import PGastronomicosDosep from "./pages/gastronomia/GastronomiaDosep";
import PEstadisticas from "./pages/Estadisticas/PEstadisticas";
import PListadoEstadisticas from "./pages/Estadisticas/PListadoEstadisticas";
import PZonaCerveceria from "./pages/gastronomia/PZonaCerveceria";
import PGastronomia from "./pages/gastronomia/PGastronomia";
import PPrincipalGastronomia from "./pages/gastronomia/PPrincipalGastronomia";
import PZonaGastronomica from "./pages/gastronomia/PZonaGastronomica";
import PCursoMarketing from "./pages/PCursoMarketing";
import PMotoTurismo from "./pages/moto_turismo/PMotoTurismo";
import PCielosPuntanos from "./pages/moto_turismo/PCielosPuntanos";
import PConsejos from "./pages/moto_turismo/PConsejos";
import PTelefonosUtiles from "./pages/moto_turismo/PTelefonosUtiles";
import PTrazosHistoria from "./pages/moto_turismo/PTrazosHistoria";
import PCoronavirus from "./pages/PCoronavirus";
import RegistroAgenciasdeViajes from "./pages/variosmenu/RegistroAgenciasdeViajes";
import RegistroGuiasTurismo from "./pages/variosmenu/RegistroGuiasTurismo";
import ListadoAgenciasDosep from "./pages/variosmenu/ListadoAgenciasDosep";
import BotonTurismoInterno from "./components/subcomponentes/BotonTurismoInterno";
import TurismoDosep from "./components/subcomponentes/TurismoDosep";
import Footer from "./components/Footer";
import PGridImages from "./pages/PGridImages";
import PVallesEncantados from "./pages/moto_turismo/PVallesEncantados";
import PSaludYVitalidad from "./pages/moto_turismo/PSaludYVitalidad";
import RegistroAlojamientos from "./pages/covid/voucher/RegistroAlojamientos";
import PCaminosPintorescos from "./pages/variosmenu/CaminosPintorescos";
import PHalloweenMain from "./pages/Halloween/PHalloweenMain";
import NotFound from "./components/NotFound";
import EnConstruccion from "./components/PaginaEnConstruccion";
import Tirolesas from "./pages/Tirolesas";
import producto from "./components/Producto";
import PMapas from "./pages/PMapas";
import GastronomiaDosep from "./pages/gastronomia/GastronomiaDosep";
import ListadoCensistas from "./pages/Censo/ListadoCensistas";
import TopBar from "./components/Topbar";
import PGustosSanLuis from "./pages/PGustosSanLuis";
import PGustosSanLuisCapacitaciones from "./pages/gustosSanLuis/capacitaciones";
import VuelosAgencia from "./pages/variosmenu/AgenciasVuelos";
import TermasSalinas from "./components/Termas_salinas";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router history={Router.hashHistory}>
          <React.Fragment>
            <TopBar />
            <Menu id="menu" />
            <Switch>
              <Route exact path="/" component={PHome} />
              <Route exact path="/novedades" component={PNovedades} />
              <Route exact path="/novedad/:id" component={PNovedad} />
              <Route exact path="/arboles" component={PArboles} />
              <Route exact path="/arbol/:id" component={PArbol} />
              <Route exact path="/zona/:id" component={PZona} />
              <Route exact path="/gustosSanLuis" component={PGustosSanLuis} />
              <Route
                exact
                path="/gustosSanLuis/Capacitaciones"
                component={PGustosSanLuisCapacitaciones}
              />
              <Route exact path="/localidad/:id" component={PLocalidad} />
              <Route exact path="/atractivo/:id" component={PAtractivo} />
              <Route exact path="/gastronomia/:id" component={PGastronomia} />
              <Route exact path="/desuscripcion" component={PDesuscribir} />
              <Route exact path="/turismoDark" component={PHalloweenMain} />
              <Route exact path="/estadisticas/:id" component={PEstadisticas} />
              <Route
                exact
                path="/listadoEstadisticas"
                component={PListadoEstadisticas}
              />
              <Route exact path="/circuitoDark" component={PMapasRecorridos} />
              <Route exact path="/actividades" component={PGridImages} />
              <Route
                exact
                path="/listado-Censistas"
                component={ListadoCensistas}
              />
              <Route
                exact
                path="/atractivos/:id"
                component={PListadoAtractivos}
              />
              <Route
                exact
                path="/gastronomialistado/:id"
                component={PListadoGastronomia}
              />
              <Route exact path="/eventos" component={PEventos} />
              <Route exact path="/evento/:id" component={PEvento} />
              <Route exact path="/alojamiento/:id" component={PAlojamiento} />
              <Route
                exact
                path="/filtroalojamiento"
                component={PFiltroAlojamiento}
              />
              <Route exact path="/listadoMapas" component={PListadoMapas} />
              <Route
                exact
                path="/filtroalojamientoAdhiere"
                component={PFiltroAlojamientoAdhiereCovid}
              />
              <Route
                exact
                path="/alojamientos-turismo-Dosep"
                component={PFiltroAlojamientoAdhiereDosep}
              />
              <Route
                exact
                path="/adheridos-turismo-Dosep"
                component={PFiltroTemplateDosep}
              />

              <Route
                exact
                path="/gastronomia-Dosep"
                component={PGastronomiaDosep}
              />
              <Route exact path="/riosysaltos" component={PRiosYSaltos} />
              <Route exact path="/agenciaviajes" component={PAgenciaViajes} />
              <Route exact path="/guiaturismo" component={PGuiaTurismo} />
              <Route
                exact
                path="/oficinasturismo"
                component={OficinasTurismo}
              />
              <Route exact path="/PAeropuerto" component={PAeropuerto} />
              <Route exact path="/coronavirus" component={PCoronavirus} />
              <Route
                exact
                path="/PAlquileresAuto"
                component={PAlquileresAuto}
              />
              <Route exact path="/PCasasCambio" component={PCasasCambio} />
              <Route exact path="/PTaxis" component={PTaxis} />
              <Route
                exact
                path="/Charla_Marketing"
                component={PCursoMarketing}
              />
              <Route exact path="/PArchivosApp" component={PArchivosApp} />
              <Route exact path="/PContacto" component={PContacto} />
              <Route exact path="/diques" component={PDiques} />
              <Route exact path="/Recorridos" component={Recorridos} />
              <Route exact path="/termas-salinas" component={TermasSalinas} />
              <Route exact path="/PComer" component={PComer} />
              <Route exact path="/PServicios" component={PServicios} />
              <Route
                exact
                path="/parques-provinciales"
                component={PParquesList}
              />
              <Route exact path="/PPermisoPesca" component={PPermisoPesca} />
              <Route exact path="/PCreerGnral" component={PCreerGnral} />
              <Route exact path="/Prueba" component={Prueba} />
              <Route exact path="/Tirolesas" component={Tirolesas} />
              <Route exact path="/Moto_Turismo" component={PMotoTurismo} />
              <Route
                exact
                path="/Cielos_Puntanos"
                component={PCielosPuntanos}
              />
              <Route exact path="/Tips_Moto" component={PConsejos} />
              <Route
                exact
                path="/Telefonos_Utiles"
                component={PTelefonosUtiles}
              />
              <Route
                exact
                path="/Trazosdehistoria"
                component={PTrazosHistoria}
              />
              <Route
                exact
                path="/VallesEncantados"
                component={PVallesEncantados}
              />
              <Route
                exact
                path="/SaludYvitalidad"
                component={PSaludYVitalidad}
              />
              <Route
                exact
                path="/RegistroAgenciasdeViajes"
                component={RegistroAgenciasdeViajes}
              />
              <Route
                exact
                path="/RegistroGuiasTurismo"
                component={RegistroGuiasTurismo}
              />
              <Route
                exact
                path="/PZonaCreer/:id/:zona"
                component={PZonaCreer}
              />
              <Route
                exact
                path="/PZonaCerveceria/:id/:zona"
                component={PZonaCerveceria}
              />
              <Route
                exact
                path="/PZonaGastronomica/:id/:zona"
                component={PZonaGastronomica}
              />
              <Route exact path="/PCerveceria" component={PCerveceria} />
              <Route
                exact
                path="/PPrincipalGastronomia"
                component={PPrincipalGastronomia}
              />

              <Route
                exact
                path="/listado-guias-agencias-covid/:tipo"
                component={ListadoGuiasAgenciasCovid}
              />

              <Route
                exact
                path="/agencias-turismo-dosep"
                component={ListadoAgenciasDosep}
              />
              <Route
                exact
                path="/turismo-interno"
                component={BotonTurismoInterno}
              />
              <Route exact path="/turismo-dosep" component={TurismoDosep} />
              <Route exact path="/descargar-mapas" component={PMapas} />
              <Route
                exact
                path="/registro-alojamientos-covid"
                component={RegistroAlojamientos}
              />
              <Route
                exact
                path="/merlo-comechingones"
                component={EnConstruccion}
              />
              <Route
                exact
                path="/diques-rios-saltos"
                component={EnConstruccion}
              />
              <Route exact path="/enConstruccion" component={EnConstruccion} />
              <Route
                exact
                path="/potrero-sierrascentrales"
                component={EnConstruccion}
              />
              <Route exact path="/termas-salinas" component={EnConstruccion} />
              <Route
                exact
                path="/turismo-religioso"
                component={EnConstruccion}
              />
              <Route exact path="/mercedes-morro" component={EnConstruccion} />
              <Route
                exact
                path="/parques-naturales"
                component={EnConstruccion}
              />
              <Route
                exact
                path="/caminos-pintorescos"
                component={PCaminosPintorescos}
              />
              <Route exact path="/agencia-vuelos" component={VuelosAgencia} />
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <ToTop showAt={400} />

            <Footer />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
  /*
	render() {
		return (
			<Provider>
				<Consumer>
					{ value => {
						return (
							<Router history={Router.hashHistory}>
								<React.Fragment>
									<Switch>
										<Route exact path="/" component={PHome} />
										<Route exact path="/novedades" component={PNovedades} />
										<Route exact path="/zona/:id" component={PZona} />
										<Route exact path="/localidad/:id" component={PLocalidad} />
										<Route exact path="/atractivo/:id" component={PAtractivo} />
									</Switch>
									<Footer />
								</React.Fragment>
							</Router>
						);
					}}
				</Consumer>
			</Provider>
		);
	}
	*/
}

export default App;
