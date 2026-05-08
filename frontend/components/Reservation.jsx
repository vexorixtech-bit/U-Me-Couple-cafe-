// ============================================
// VICKY RESTAURANT - RESERVATION COMPONENT
// ============================================

const Reservation = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            date: e.target.date.value,
            time: e.target.time.value,
            guests: e.target.guests.value,
            message: e.target.message.value
        };
        
        // Demo mode - no backend call
        console.log('Reservation form submitted (demo mode):', formData);
        alert('✅ Thank you for your reservation! We will confirm your booking shortly.');
        e.target.reset();
    };

    return (
        <section className="reservation" id="reservation">
            <div className="section-header">
                <p className="section-subtitle">Book Your Table</p>
                <h2 className="section-title" style={{color: '#2D1B69'}}>Make a Reservation</h2>
                <div className="section-line"></div>
            </div>
            <form className="reservation-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" name="phone" placeholder="Your Phone" required />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input type="date" name="date" required />
                    </div>
                    <div className="form-group">
                        <label>Time</label>
                        <select name="time" required>
                            <option value="">Select Time</option>
                            <option value="09:00">9:00 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="16:00">4:00 PM</option>
                            <option value="17:00">5:00 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="19:00">7:00 PM</option>
                            <option value="20:00">8:00 PM</option>
                            <option value="21:00">9:00 PM</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Number of Guests</label>
                        <select name="guests" required>
                            <option value="">Select Guests</option>
                            <option value="1">1 Person</option>
                            <option value="2">2 People</option>
                            <option value="3">3 People</option>
                            <option value="4">4 People</option>
                            <option value="5">5 People</option>
                            <option value="6">6 People</option>
                            <option value="7">7 People</option>
                            <option value="8">8+ People</option>
                        </select>
                    </div>
                    <div className="form-group form-full">
                        <label>Special Requests</label>
                        <input type="text" name="message" placeholder="Any allergies, celebrations, or special requests?" />
                    </div>
                </div>
                <button type="submit" className="btn">
                    <i className="fas fa-calendar-alt"></i>
                    Confirm Reservation
                </button>
            </form>
        </section>
    );
};