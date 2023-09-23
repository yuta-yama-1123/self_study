// slack api(lookupbyemail)をコールする。
function lookupByEmail() {
    const text = "test";
    console.log( text );

    // var _data = JSON.stringify({});
    var _data = "";
    $.ajax({
        url: 'https://slack.com/api/users.lookupByEmail',
        headers: {
            'email' : 'ycnzuujk@i.softbank.jp',
            'token' : 'xoxb-2429902191637-5939528964898-uXtUqUfBzOwNK8YCVE47LxHq'
        },
        type: 'GET',
        contentType:'application/json; charset=utf-8',
        data: _data,
        dataType: 'text/plain',
    }).done(function(data1,textStatus,jqXHR) {
        console.log(jqXHR.status);
        console.log(textStatus);
        console.log(data1);
    });
}