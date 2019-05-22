let url="https://fakerestapi.azurewebsites.net/api/Books";
fetch(url)
.then((data)=>{ return data.json() })
.then((data)=>{
	//console.log(data);
	for(let item of data){
		console.log(item.ID + " "+ item.Title );
	}

})