var errorFinderPlugin = ActiveBuild.UiPlugin.extend({
    id: 'build-errorfinder-errors',
    css: 'col-lg-6 col-md-12 col-sm-12 col-xs-12',
    title: Lang.get('errorFinder'),
    lastData: null,
    displayOnUpdate: false,
    box: true,
    rendered: false,

    register: function() {
        var self = this;
        var query = ActiveBuild.registerQuery('errorFinder-data', -1, {key: 'errorFinder-data'})

        $(window).on('errorFinder-data', function(data) {
            self.onUpdate(data);
        });

        $(window).on('build-updated', function() {
            if (!self.rendered) {
                self.displayOnUpdate = true;
                query();
            }
        });
    },

    render: function() {

        return $('<div class="table-responsive"><table class="table" id="errorFinder-data">' +
            '<thead>' +
            '<tr>' +
            '   <th>'+Lang.get('test')+'</th>' +
            '</tr>' +
            '</thead><tbody></tbody></table></div>');
    },

    onUpdate: function(e) {
        if (!e.queryData) {
            $('#build-errorFinder-errors').hide();
            return;
        }

        this.rendered = true;
        this.lastData = e.queryData;

        var tests = this.lastData[0].meta_value;
        var tbody = $('#errorFinder-data tbody');
        tbody.empty();
        tbody.append('<h2>error finder</h2>');

        /**if (tests.length == 0) {
            $('#build-errorFinder-errors').hide();
            return;
        }

        for (var i in tests) {

            var row = $('<tr>' +
                '<td><strong>'+tests[i].suite+'' +
                '::'+tests[i].test+'</strong><br>' +
                ''+(tests[i].message || '')+'</td>' +
                '</tr>');

            if (!tests[i].pass) {
                row.addClass('danger');
            } else {
                row.addClass('success');
            }


            tbody.append(row);
        }*/



        $('#build-errorFinder-errors').show();
    }
});

ActiveBuild.registerPlugin(new errorFinderPlugin());
