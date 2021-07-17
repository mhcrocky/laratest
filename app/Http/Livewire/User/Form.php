<?php

namespace App\Http\Livewire\User;

use Livewire\Component;
use App\Models\User;
class Form extends Component
{
    public $name;
    public $email;
    public $password;
    
    public function render()
    {
        return view('livewire.user.form');
    }

    public function save()
    {
        $validated = $this->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        User::create(array_merge($validated, [
            'password' => bcrypt($this->password)
        ]));
        
        //TODO:asign role and permission

        $this->resetForm();
        $this->dispatchBrowserEvent('user-saved', ['action' => 'created', 'user_name' => $validated['name']]);
        $this->emitTo('live-table', 'triggerRefresh');
    }

    public function resetForm(){
        $this->name = null;
        $this->email = null;
        $this->password = null;
    }
}
