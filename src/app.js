import Vue from 'vue';

document.addEventListener('DOMContentloaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "finish to do list", priority: true},
        {name: "make it work", priority: false}
      ],
      newItem: ""
    },
    methods: {
      saveNewItem: function(){
        this.items.push({
          name: this.newItem,
          priority: false
        });
        this.newItem:"";

      },
      changePriority: function(index) {
        this.items[index].priority = true;
      }
    }
  });
});
