$(document).ready(function (){
    $.get(
        "https://raw.githubusercontent.com/Cutwell/What-The-Fork/master/README.md",
        function(file) {
            var wtfork_md = file.split("### Puns")[1].split("\n");
            var pun_list = [];
            wtfork_md.map((contribution) => {
                if(contribution == ""){
                    return;
                }
                var pun = contribution.substring(contribution.lastIndexOf("[")+1, contribution.lastIndexOf("]"));
                var url = contribution.substring(contribution.lastIndexOf("(")+1, contribution.lastIndexOf(")"));
                pun_list.push(["<a href="+url+">"+pun+"</a>"]);
            });

            var pun_count = pun_list.length;
            var rand = Math.floor((Math.random() * pun_count) + 1);
            var floor = Math.ceil((10 / 100) * pun_count);

            if(rand <= floor) {
                $("#easter-egg").attr('src', "static/img/forked_hard.jpg");
            } else {
                $("#easter-egg").attr('src', "static/img/wtforkbanner.png");
            }

            $("#pun-count").html(pun_count+" Forking Puns:");
            var rand_pun = pun_list[Math.floor(Math.random() * pun_list.length)];
            $(".pun-item").html(rand_pun);
        }
    );
});
