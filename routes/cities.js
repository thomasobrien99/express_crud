const express = require("express"),
	    router = express.Router(),
	    knex = require('../db/knex');

router.route('/')
	.get(function(req, res)
	{
		knex('cities', '*')
		.then((cities)=>{
			res.render('cities/index', {cities})
		})
	})
	.post(function(req, res)
	{
		eval(require('locus'))
		knex('cities')
		.insert(req.body.city)
		.then(()=>
			res.redirect('/cities')
			)
	});

router.route('/new')
	.get(function(req,res)
	{
		res.render('cities/new')
	});

router.route('/:id/edit')
	.get(function(req, res)
	{
		knex('cities')
		.where('id', req.params.id)
		.first()
		.then((city)=>{
			res.render('cities/edit', {city})
		})
	});

router.route('/:id')
	.get(function(req, res)
	{
		knex('cities')
		.where('id', req.params.id)
		.first()
		.then((city)=>{
			res.render('cities/show', {city})
		})
	})
	.put(function(req, res)
	{
		knex('cities')
		.where('id', req.params.id)
		.update(req.body.city)
		.then(()=>
			res.redirect('/cities')
			)
	})
	.delete(function(req,res)
	{
		knex('cities')
		.where('id', req.params.id)
		.del()
		.then(()=>{
			res.redirect('/cities')
		})
	});

module.exports = router;