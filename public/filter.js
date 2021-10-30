Vue.component('filter-items', {
    
    template: ` <div class="box"> 
                <div class="container">
                <span class="icon"><i class="fa fa-search"></i></span>
                <input type="search" id="search" placeholder="Search..." @input="$parent.filter" />
                </div>
                </div>`,

})