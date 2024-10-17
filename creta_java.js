function Ajouter(val)
	{
		let valeur_initiale = document.getElementById('q').innerHTML;
		let valeur_finale = Number(valeur_initiale)+ val;
		if(valeur_finale >=1)
		{
			document.getElementById('q').innerHTML = valeur_finale;
			document.getElementById('total').innerHTML = 'Tyrannosaurus'
			document.getElementById('image').src = 'trex.jpeg';
		}
		if(valeur_finale >=2)
		{
			document.getElementById('image').src = 'velociraptor.png';
			document.getElementById('total').innerHTML = 'Velociraptor'
		}
		if(valeur_finale >=3)
		{
			document.getElementById('image').src = 'spino.jpg';
			document.getElementById('total').innerHTML = 'Spinosaurus'
		}
		if(valeur_finale >=4)
		{
			document.getElementById('image').src = 'Triceratops.png';
			document.getElementById('total').innerHTML = 'Triceratops'
		}		
		if(valeur_finale >=5)
		{
			document.getElementById('image').src = 'Ammonoid.jpg';
			document.getElementById('total').innerHTML = 'Ammonoidea'
		}		
	}