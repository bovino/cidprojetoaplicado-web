<template>
<v-container fluid>
  <div>
    <h1>Lista de alertas configurados pelo usuário {{usuario.nome}}</h1> <br/>
    <a href="/#/cadastrarAlertas"> Configurar novo alerta</a>
  </div>
  <v-data-table
    :headers="headers"
    :items="alerts"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-left">{{ props.item.calories }}</td>
      <td class="text-xs-left">{{ props.item.fat }}</td>
      <td class="text-xs-left">{{ props.item.carbs }}</td>
      <td class="text-xs-left">{{ props.item.protein }}</td>
      <td class="text-xs-left">{{ props.item.iron }}</td>
    </template>
  </v-data-table>
</v-container>
</template>

<script>
  import VDataTable from 'vuetify/es5/components/VDataTable';

  export default {
    components: {VDataTable},
    data () {
      return {
        usuario: { nome: 'Marcelo Bezerra '},
        headers: [
          {
            text: 'Nome do alerta',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Descrição', value: 'calories' },
          { text: 'Data de cadastro', value: 'fat' },
          { text: 'Ativo', value: 'carbs' },
          { text: 'Alertas deste tipo enviados', value: 'protein' }
        ],
        alerts: [
          {
            value: false,
            name: 'Alerta Min dos Transportes',
            calories: 'Descriçao do alerta 1',
            fat: '11/02/2019',
            carbs: 'Sim',
            protein: 11
          },
          {
                      value: false,
                      name: 'Alerta 2 Min da Educação',
                      calories: 'Descriçao do alerta 2',
                      fat: '15/02/2019',
                      carbs: 'Sim',
                      protein: 11
          },
          {
                      value: false,
                      name: 'Alerta Min dos Esportes',
                      calories: 'Descriçao do alerta 3',
                      fat: '12/02/2019',
                      carbs: 'Não',
                      protein: 11
          },

          {
                      value: false,
                      name: 'Alerta Min de Minas e Energia',
                      calories: 'Descriçao do alerta 4',
                      fat: '11/02/2019',
                      carbs: 'Sim',
                      protein: 11
          },

          {
                      value: false,
                      name: 'Alerta Min da Economia',
                      calories: 'Descriçao do alerta 5',
                      fat: '18/02/2019',
                      carbs: 'Sim',
                      protein: 11
          }
        ]
      }
    }
  }
</script>