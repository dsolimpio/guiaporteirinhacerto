import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BancosPage } from '../pages/bancos/bancos';
import { AcademiasPage } from '../pages/academias/academias';
import { AcouguesPage } from '../pages/acougues/acougues';
import { AgropecuariaPage } from '../pages/agropecuaria/agropecuaria';
import { AntenasPage } from '../pages/antenas/antenas';
import { BelezaPage } from '../pages/beleza/beleza';
import { DrogariasPage } from '../pages/drogarias/drogarias';
import { CreditoPage } from '../pages/credito/credito';
import { SupermercadosPage } from '../pages/supermercados/supermercados';
import { ViagensETurismoPage } from '../pages/viagens-e-turismo/viagens-e-turismo';
import { VeterinariosPage } from '../pages/veterinarios/veterinarios';
import { TaxistasPage } from '../pages/taxistas/taxistas';
import { SorveteriasPage } from '../pages/sorveterias/sorveterias';
import { SomPage } from '../pages/som/som';
import { SeguradorasPage } from '../pages/seguradoras/seguradoras';
import { RestaurantesPage } from '../pages/restaurantes/restaurantes';
import { RadiosPage } from '../pages/radios/radios';
import { PostosDeGasolinaPage } from '../pages/postos-de-gasolina/postos-de-gasolina';
import { PadariasPage } from '../pages/padarias/padarias';
import { OticasPage } from '../pages/oticas/oticas';
import { MoveisPage } from '../pages/moveis/moveis';
import { MototaxistasPage } from '../pages/mototaxistas/mototaxistas';
import { ModaPage } from '../pages/moda/moda';
import { MedicosPage } from '../pages/medicos/medicos';
import { MalhariasEConfeccoesPage } from '../pages/malharias-e-confeccoes/malharias-e-confeccoes';
import { LanchonetesPage } from '../pages/lanchonetes/lanchonetes';
import { InformaticaPage } from '../pages/informatica/informatica';
import { ImoveisPage } from '../pages/imoveis/imoveis';
import { HospedagensPage } from '../pages/hospedagens/hospedagens';
import { GraficasEBrindesPage } from '../pages/graficas-e-brindes/graficas-e-brindes';
import { LavaJatoPage } from '../pages/lava-jato/lava-jato';
import { EngenhariaPage } from '../pages/engenharia/engenharia';
import { EnsinoPage } from '../pages/ensino/ensino';
import { FotografosPage } from '../pages/fotografos/fotografos';
import { FunerariasPage } from '../pages/funerarias/funerarias';
import { GasPage } from '../pages/gas/gas';
import { VidracariasPage } from '../pages/vidracarias/vidracarias';
import { DistribuidorasPage } from '../pages/distribuidoras/distribuidoras';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { AnunciePage } from '../pages/anuncie/anuncie';
import { AnunciePageModule } from '../pages/anuncie/anuncie.module';
import { EmpresasPremiumPageModule } from '../pages/empresas-premium/empresas-premium.module';
import { OlimpioComunicacaoPage } from '../pages/olimpio-comunicacao/olimpio-comunicacao';
import { OlimpioPage } from '../pages/olimpio/olimpio';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BancosPage,
    AcademiasPage,
    AcouguesPage,
    AgropecuariaPage,
    AntenasPage,
    BelezaPage,
    CreditoPage,
    DistribuidorasPage,
    DrogariasPage,
    EngenhariaPage,
    EnsinoPage,
    FotografosPage,
    FunerariasPage,
    GasPage,
    GraficasEBrindesPage,
    HospedagensPage,
    ImoveisPage,
    InformaticaPage,
    LanchonetesPage,
    LavaJatoPage,
    MalhariasEConfeccoesPage,
    MedicosPage,
    ModaPage,
    MototaxistasPage,
    MoveisPage,
    OticasPage,
    PadariasPage,
    PostosDeGasolinaPage,
    RadiosPage,
    RestaurantesPage,
    SeguradorasPage,
    SomPage,
    SorveteriasPage,
    SupermercadosPage,
    TaxistasPage,
    VeterinariosPage,
    ViagensETurismoPage,
    VidracariasPage,
    OlimpioPage
  
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SobrePageModule,
    AnunciePageModule,
    EmpresasPremiumPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BancosPage,
    AcademiasPage,
    AcouguesPage,
    AgropecuariaPage,
    AntenasPage,
    BelezaPage,
    CreditoPage,
    DistribuidorasPage,
    DrogariasPage,
    EngenhariaPage,
    EnsinoPage,
    FotografosPage,
    FunerariasPage,
    GasPage,
    GraficasEBrindesPage,
    HospedagensPage,
    ImoveisPage,
    InformaticaPage,
    LanchonetesPage,
    LavaJatoPage,
    MalhariasEConfeccoesPage,
    MedicosPage,
    ModaPage,
    MototaxistasPage,
    MoveisPage,
    DrogariasPage,
    OticasPage,
    PadariasPage,
    PostosDeGasolinaPage,
    RadiosPage,
    SeguradorasPage,
    SomPage,
    SorveteriasPage,
    SupermercadosPage,
    TaxistasPage,
    VeterinariosPage,
    ViagensETurismoPage,
    VidracariasPage,
    OlimpioPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
