var README;
var pun_list;

document.body.onload = function() {
    fetchREADME('README.md')
    .then(function (data) {
        parseREADME();
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
}

async function fetchREADME(url) {
    await fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                README = data;
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
}

function parseREADME() {
    let wtfork_md = README.split("### Puns")[1].split("\n");
    pun_list = [];

    wtfork_md.map((contribution) => {
        if(contribution == ""){
            return;
        }
        let pun = contribution.substring(contribution.lastIndexOf("[")+1, contribution.lastIndexOf("]"));
        let url = contribution.substring(contribution.lastIndexOf("(")+1, contribution.lastIndexOf(")"));
        pun_list.push(["<a href="+url+">"+pun+"</a>"]);
    });

    let pun_count = pun_list.length;
    let rand = Math.floor((Math.random() * pun_count) + 1);
    let floor = Math.ceil((10 / 100) * pun_count);

    if(rand <= floor) {
        document.getElementById('easter-egg').src = "assets/img/forked_hard.jpg";
    }

    document.getElementById('pun-count').innerHTML = pun_count+" Forking Puns";

    newPun();
}

function newPun() {
    let rand = Math.floor(Math.random() * pun_list.length)
    let rand_pun = pun_list[rand];
    document.getElementById('new-pun').innerHTML = `(${rand}/${pun_list.length}) ${rand_pun}`;
}