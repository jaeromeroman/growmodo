<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminSeeder extends Seeder
{
    public function run()
    {
        // Create the admin user
        User::updateOrCreate(
            ['email' => 'admin@test.com'], 
            [
                'username' => 'admin', 
                'email' => 'admin@test.com',
                'password' => Hash::make('password'), 
                'role' => 'admin',
            ]
        );
    }
}
