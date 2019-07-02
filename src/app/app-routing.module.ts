import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'almacenadora', loadChildren: './pages/almacenadora/almacenadora.module#AlmacenadoraPageModule' },
  { path: 'aseguradora', loadChildren: './pages/aseguradora/aseguradora.module#AseguradoraPageModule' },
  { path: 'lugares-de-inversion', loadChildren: './pages/lugares-de-inversion/lugares-de-inversion.module#LugaresDeInversionPageModule' },
  { path: 'origen-de-fondos', loadChildren: './pages/origen-de-fondos/origen-de-fondos.module#OrigenDeFondosPageModule' },
  { path: 'formas-de-pago', loadChildren: './pages/formas-de-pago/formas-de-pago.module#FormasDePagoPageModule' },
  { path: 'destinos', loadChildren: './pages/destinos/destinos.module#DestinosPageModule' },
  { path: 'categoria', loadChildren: './pages/categoria/categoria.module#CategoriaPageModule' },
  { path: 'estatus-garantia-real', loadChildren: './pages/estatus-garantia-real/estatus-garantia-real.module#EstatusGarantiaRealPageModule' },
  { path: 'estatus-avaluos', loadChildren: './pages/estatus-avaluos/estatus-avaluos.module#EstatusAvaluosPageModule' },
  { path: 'ingenieros-valuadores', loadChildren: './pages/ingenieros-valuadores/ingenieros-valuadores.module#IngenierosValuadoresPageModule' },
  { path: 'notarios', loadChildren: './pages/notarios/notarios.module#NotariosPageModule' },
  { path: 'motivos-ajuste', loadChildren: './pages/motivos-ajuste/motivos-ajuste.module#MotivosAjustePageModule' },
  { path: 'dias-inhabiles', loadChildren: './pages/dias-inhabiles/dias-inhabiles.module#DiasInhabilesPageModule' },
  { path: 'cobros-adicionales', loadChildren: './pages/cobros-adicionales/cobros-adicionales.module#CobrosAdicionalesPageModule' },
  { path: 'instituciones', loadChildren: './pages/instituciones/instituciones.module#InstitucionesPageModule' },
  { path: 'motivo-de-reversa', loadChildren: './pages/motivo-de-reversa/motivo-de-reversa.module#MotivoDeReversaPageModule' },
  { path: 'formas-de-desembolso', loadChildren: './pages/formas-de-desembolso/formas-de-desembolso.module#FormasDeDesembolsoPageModule' },
  { path: 'medios-de-contacto', loadChildren: './pages/medios-de-contacto/medios-de-contacto.module#MediosDeContactoPageModule' },
  { path: 'tipo-deduccion', loadChildren: './pages/tipo-deduccion/tipo-deduccion.module#TipoDeduccionPageModule' },
  { path: 'tipos-de-prestamos', loadChildren: './pages/tipos-de-prestamos/tipos-de-prestamos.module#TiposDePrestamosPageModule' },
  { path: 'tipo-de-vehiculo', loadChildren: './pages/tipo-de-vehiculo/tipo-de-vehiculo.module#TipoDeVehiculoPageModule' },
  { path: 'tipo-activo-crediticio', loadChildren: './pages/tipo-activo-crediticio/tipo-activo-crediticio.module#TipoActivoCrediticioPageModule' },
  { path: 'corredor-seguro', loadChildren: './pages/corredor-seguro/corredor-seguro.module#CorredorSeguroPageModule' },
  { path: 'ejecutivo-cuenta', loadChildren: './pages/ejecutivo-cuenta/ejecutivo-cuenta.module#EjecutivoCuentaPageModule' },
  { path: 'empresa', loadChildren: './pages/empresa/empresa.module#EmpresaPageModule' },
  { path: 'cambio-ejecutivo', loadChildren: './pages/cambio-ejecutivo/cambio-ejecutivo.module#CambioEjecutivoPageModule' },
  { path: 'poder', loadChildren: './pages/poder/poder.module#PoderPageModule' },
  { path: 'estado-resolucion', loadChildren: './pages/estado-resolucion/estado-resolucion.module#EstadoResolucionPageModule' },
  { path: 'tipo-ajuste', loadChildren: './pages/tipo-ajuste/tipo-ajuste.module#TipoAjustePageModule' },
  { path: 'instancia', loadChildren: './pages/instancia/instancia.module#InstanciaPageModule' },
  { path: 'moneda-motivo-reversion-de-pago', loadChildren: './pages/moneda-motivo-reversion-de-pago/moneda-motivo-reversion-de-pago.module#MonedaMotivoReversionDePagoPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
