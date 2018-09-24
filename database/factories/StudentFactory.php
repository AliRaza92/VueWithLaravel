<?php

use Faker\Generator as Faker;

$factory->define(\App\Students::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'address' => $faker->address
    ];
});
