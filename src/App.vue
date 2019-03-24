<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-on:click="link(item.link)" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Home',
        link: '/#/'
      }, {
        icon: 'bubble_chart',
        title: 'Alertas',
        link: '/#/alertas'
      },
      {
        icon: 'bubble_chart',
        title: 'Graficos',
        link: '/#/graficos'
      },
      {
        icon: 'bubble_chart',
        title: 'Logout',
        link: '/#/logout'
      },
      {
        icon: 'bubble_chart',
        title: 'Perfil',
        link: '/#/perfil'
      },],
      miniVariant: false,
      right: true,
      title: 'Projeto aplicado - Analisador de Contratos e licitações'
    }
  },
  methods: {
    link: function (newUrl) {
      window.location = newUrl
    }
  }
}
</script>
