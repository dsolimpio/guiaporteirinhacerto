import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BancosPage } from '../bancos/bancos';
import { AcouguesPage } from '../acougues/acougues';
import { AgropecuariaPage } from '../agropecuaria/agropecuaria';
import { AcademiasPage } from '../academias/academias';
import { BaresPage } from '../bares/bares';
import { AntenasPage } from '../antenas/antenas';
import { AutonomosPage } from '../autonomos/autonomos';
import { BelezaPage } from '../beleza/beleza';
import { BrindesPage } from '../brindes/brindes';
import { CelularesPage } from '../celulares/celulares';
import { ConfeitariasPage } from '../confeitarias/confeitarias';
import { ContabilidadePage } from '../contabilidade/contabilidade';
import { CasaPage } from '../casa/casa';
import { CreditoPage } from '../credito/credito';
import { DecoracoesPage } from '../decoracoes/decoracoes';
import { DespachantesPage } from '../despachantes/despachantes';
import { DocesPage } from '../doces/doces';
import { DistribuidorasPage } from '../distribuidoras/distribuidoras';
import { EngenhariaPage } from '../engenharia/engenharia';
import { EnsinoPage } from '../ensino/ensino';
import { FotografosPage } from '../fotografos/fotografos';
import { FunerariasPage } from '../funerarias/funerarias';
import { GasPage } from '../gas/gas';
import { GraficasEBrindesPage } from '../graficas-e-brindes/graficas-e-brindes';
import { HospedagensPage } from '../hospedagens/hospedagens';
import { ImoveisPage } from '../imoveis/imoveis';
import { InformaticaPage } from '../informatica/informatica';
import { LanchonetesPage } from '../lanchonetes/lanchonetes';
import { LavaJatoPage } from '../lava-jato/lava-jato';
import { MalhariasEConfeccoesPage } from '../malharias-e-confeccoes/malharias-e-confeccoes';
import { MedicosPage } from '../medicos/medicos';
import { ModaPage } from '../moda/moda';
import { MototaxistasPage } from '../mototaxistas/mototaxistas';
import { MoveisPage } from '../moveis/moveis';
import { OticasPage } from '../oticas/oticas';
import { PadariasPage } from '../padarias/padarias';
import { PostosDeGasolinaPage } from '../postos-de-gasolina/postos-de-gasolina';
import { RadiosPage } from '../radios/radios';
import { RestaurantesPage } from '../restaurantes/restaurantes';
import { SeguradorasPage } from '../seguradoras/seguradoras';
import { SomPage } from '../som/som';
import { SorveteriasPage } from '../sorveterias/sorveterias';
import { SupermercadosPage } from '../supermercados/supermercados';
import { TaxistasPage } from '../taxistas/taxistas';
import { VeterinariosPage } from '../veterinarios/veterinarios';
import { ViagensETurismoPage } from '../viagens-e-turismo/viagens-e-turismo';
import { VidracariasPage } from '../vidracarias/vidracarias';
import { SobrePage } from '../sobre/sobre';
import { AnunciePage } from '../anuncie/anuncie';
import { EmpresasPremiumPage } from '../empresas-premium/empresas-premium';
import { OlimpioComunicacaoPage } from '../olimpio-comunicacao/olimpio-comunicacao';
import { OlimpioPage } from '../olimpio/olimpio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public refresher;
  public isrefreshing: boolean = false;
  constructor(public navCtrl: NavController) {

  }
  goToBancosPage() {
    this.navCtrl.push(BancosPage);

  }



  goToAcademiasPage() {
    this.navCtrl.push(AcademiasPage);

  }

  goToAcouguesPage() {
    this.navCtrl.push(AcouguesPage);

  }

  goToAgropecuariaPage() {
    this.navCtrl.push(AgropecuariaPage);

  }




  goToAntenasPage() {
    this.navCtrl.push(AntenasPage);

  }

  goToAutonomosPage() {
    this.navCtrl.push(AutonomosPage);

  }




  goToBaresPage() {
    this.navCtrl.push(BaresPage);

  }



  goToBelezaPage() {
    this.navCtrl.push(BelezaPage);

  }



  goToBrindesPage() {
    this.navCtrl.push(BrindesPage);

  }



  goToCasaPage() {
    this.navCtrl.push(CasaPage);

  }



  goToCelularesPage() {
    this.navCtrl.push(CelularesPage);

  }



  goToConfeitariasPage() {
    this.navCtrl.push(ConfeitariasPage);

  }



  goToContabilidadePage() {
    this.navCtrl.push(ContabilidadePage);

  }


  goToCreditoPage() {
    this.navCtrl.push(CreditoPage);

  }


  goToDecoracoesPage() {
    this.navCtrl.push(DecoracoesPage);

  }



  goToDespachantesPage() {
    this.navCtrl.push(DespachantesPage);

  }



  goToDistribuidorasPage() {
    this.navCtrl.push(DistribuidorasPage);

  }



  goToDocesPage() {
    this.navCtrl.push(DocesPage);

  }

  goToDrogariasPagePage() {
    this.navCtrl.push(AgropecuariaPage);

  }



  goToEngenhariaPage() {
    this.navCtrl.push(EngenhariaPage);

  }



  goToEnsinoPage() {
    this.navCtrl.push(EnsinoPage);

  }


  goToFotografosPage() {
    this.navCtrl.push(FotografosPage);

  }



  goToFunerariasPage() {
    this.navCtrl.push(FunerariasPage);

  }



  goToGasPage() {
    this.navCtrl.push(GasPage);

  }



  goToGraficasEBrindesPage() {
    this.navCtrl.push(GraficasEBrindesPage);

  }


  goToHospedagensPage() {
    this.navCtrl.push(HospedagensPage);

  }



  goToImoveisPage() {
    this.navCtrl.push(ImoveisPage);

  }



  goToInformaticaPage() {
    this.navCtrl.push(InformaticaPage);

  }



  goToLanchonetesPage() {
    this.navCtrl.push(LanchonetesPage);

  }



  goToLavaJatoPage() {
    this.navCtrl.push(LavaJatoPage);

  }



  goToMalhariasEConfeccoesPage() {
    this.navCtrl.push(MalhariasEConfeccoesPage);

  }




  goToMedicosPage() {
    this.navCtrl.push(MedicosPage);

  }

  goToModaPage() {
    this.navCtrl.push(ModaPage);

  }


  goToMototaxistasPage() {
    this.navCtrl.push(MototaxistasPage);

  }


  goToMoveisPage() {
    this.navCtrl.push(MoveisPage);

  }


  goToOticasPage() {
    this.navCtrl.push(OticasPage);

  }

  goToPadariasPage() {
    this.navCtrl.push(PadariasPage);

  }

  goToPostosDeGasolinaPage() {
    this.navCtrl.push(PostosDeGasolinaPage);

  }


  goToRadiosPage() {
    this.navCtrl.push(RadiosPage);

  }

  goToRestaurantesPage() {
    this.navCtrl.push(RestaurantesPage);

  }


  goToSeguradorasPage() {
    this.navCtrl.push(SeguradorasPage);

  }


  goToSomPage() {
    this.navCtrl.push(SomPage);

  }



  goToSorveteriasPage() {
    this.navCtrl.push(SorveteriasPage);

  }


  goToSupermercadosPage() {
    this.navCtrl.push(SupermercadosPage);

  }


  goToTaxistasPage() {
    this.navCtrl.push(TaxistasPage);

  }


  goToVeterinariosPage() {
    this.navCtrl.push(VeterinariosPage);

  }


  goToViagensETurismoPage() {
    this.navCtrl.push(ViagensETurismoPage);

  }

  goToVidracariasPage() {
    this.navCtrl.push(VidracariasPage);

  }
  goToOlimpioPage() {
    this.navCtrl.push(OlimpioPage);

  }

  abrirSobre() {
    this.navCtrl.push(SobrePage)

  }

  abrirAnuncie() {
    this.navCtrl.push(AnunciePage)

  }

  abrirEmpresas() {
    this.navCtrl.push(EmpresasPremiumPage)

  }

  buttons: string[];
  
   generateButtons() {
     this.buttons = [
       'Storage in Ionic 2',
       'Ionic 2 - calendar',
       'Creating a Android application using ionic framework.',
       'Identifying app resume event in ionic - android',
       'What is hybrid application and why.?',
       'Procedure to remove back button text',
       'How to reposition ionic tabs on top position.',
       'Override Hardware back button in cordova based application - Ionic',
       'Drupal 8: Enabling Facets for Restful web services',
       'Drupal 8: Get current user session',
       'Drupal 8: Programatically create Add another field - Example',  
       '<button ion-button full (click)="goToAcademiasPage()">Academias</button>',
      
       'goToTaxistasPage()'
     ];
   }
  
   getButtons(ev: any) {
     this.generateButtons();
     let serVal = ev.target.value;
     if (serVal && serVal.trim() != '') {
       this.buttons = this.buttons.filter((button) => {
         return (button.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
       })
     }
   }



   doRefresh(refresher) {
    this.refresher = refresher;
    if (this.isrefreshing){
      this.refresher.complete();

    }
  }

}
