<?php

namespace App\Http\Livewire\User;

use Livewire\Component;
use App\Models\User;
class Form extends Component
{
    public $name;
    public $email;
    public $user_id = null;

    protected $listeners = ['triggerEdit'];

    public function render()
    {
        return view('livewire.user.form');
    }

    public function save()
    {
        if ($this->user_id) {
            $user = $this->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255',
            ]);

            User::find($this->user_id)
                ->update($user);
    
            $this->emit('user-saved', ['action' => 'updated', 'user_name' => $this->name]);
        } else {
            
            $user = $this->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
            ]);

            User::create(array_merge($user, [
                'password' => bcrypt($this->email)
            ]));
    
            $this->emit('user-saved', ['action' => 'created', 'user_name' => $this->name]);
        }
        
        //TODO:asign role and permission

        $this->resetForm();
        $this->emitTo('user.index', 'triggerRefresh');
    }

    public function triggerEdit($user)
    {
        $this->user_id = $user['id'];
        $this->name = $user['name'];
        $this->email = $user['email'];
        
        $this->emit('dataFetched', $user);
    }

    public function resetForm(){
        $this->name = null;
        $this->email = null;
    }
}
