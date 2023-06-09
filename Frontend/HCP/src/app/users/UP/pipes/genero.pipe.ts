import { Pipe, PipeTransform } from '@angular/core';
import { Genero } from '../../interfaces/interfaces';

@Pipe( {
  name: 'genero'
} )
export class GeneroPipe implements PipeTransform
{



  transform ( valor: Genero ): string
  {

    if ( valor === 'Masculino' )
    {
      return 'Bienvenido';
    }
    else if ( valor === 'Femenino' )
    {
      return 'Bienvenida';
    }
    else
    {
      return 'Bienvenide';
    }
  }

}
