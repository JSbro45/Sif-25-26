function buttonOnClick(){
            const btn = document.getElementById('ddToggle');
            const menu = document.getElementById('ddMenu');

            function open(){
                menu.classList.add('show');
                btn.setAttribute('aria-expanded','true');
            }
            function close(){
                menu.classList.remove('show');
                btn.setAttribute('aria-expanded','false');
            }
            function toggle(){
                menu.classList.contains('show') ? close() : open();
            }

            btn.addEventListener('click', function(e){
                e.stopPropagation();
                toggle();
            });

             // close when clicking outside
             
            document.addEventListener('click', function(e){
                if (!menu.contains(e.target) && !btn.contains(e.target)) close();
            });

            // close with Escape
            document.addEventListener('keydown', function(e){
                if (e.key === 'Escape') close();
            });

            // optional: close when a menu item is activated (simulate navigation)
            menu.addEventListener('click', function(e){
                const target = e.target.closest('a');
                if (target) close();
            });
        };